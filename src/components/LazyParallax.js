import React, {useEffect, useRef, useCallback, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const LazyParallax = ({ children, image, height, strength}) => {
  const ref = useRef();
  const requestRef = useRef()
  const imgHeight = height + strength
  const [inViewRef, inView] = useInView({triggerOnce: false})
  const [transform, setTransform] = useState({transform: 'translate3d(-50%, 0, 0)'})

  const wrapperStyle = {
    overflow:'hidden', 
    position: 'relative', 
    height: height+'px'
  }

  const imageStyle = {
    position:'absolute',
    left: '50%',
    width: '100%',
    height: imgHeight + `px`,
  }

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    const animate = () => {
      const r = ref.current.getBoundingClientRect()
      const vpHeight = window.innerHeight
      const p = (r.top + r.height) / (vpHeight + r.height)
      const pos = strength * p;
      const transform = `translate3d(-50%, ${-pos}px, 0)`
      setTransform({WebkitTransform: transform, transform})
    }
    if (inView) {
      window.addEventListener("scroll", animate);
    } else {
      window.removeEventListener("scroll", animate);
    }
    return () => window.removeEventListener("scroll", animate);
  }, [inView, transform, strength, ref]);

  

  return (
    <div className="parallax" ref={setRefs} style={wrapperStyle}>
      <PreviewCompatibleImage imageInfo={{image, style:{...imageStyle, ...transform}}} />
      <div className="parallax-content" style={{position:'relative'}}>
        {children}
      </div>
      
    </div>
  )
}

export default LazyParallax