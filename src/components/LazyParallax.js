import React, {useEffect, useRef, useCallback, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const LazyParallax = ({ children, image, height, strength}) => {
  const ref = useRef();
  const tickingRef = useRef()
  const imgHeight = height + strength
  const [inViewRef, inView] = useInView({triggerOnce: false})
  const [imgStyle, setImgStyle] = useState({
    position:'absolute',
    left: '50%',
    width: '100%',
    height: imgHeight+`px`,
    transform: 'translate3d(-50%, 0, 0)',
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    MsBackfaceVisibility: 'hidden',
  })
  let timestamp = Date.now();

  const wrapperStyle = {
    overflow:'hidden', 
    position: 'relative', 
    height: height+'px'
  }

  const childrenStyle = {
    position:'absolute',
    width: '100%',
    height: height+`px`,
    zIndex: 1
  }

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    const onScroll = () => {
      if(!tickingRef.current) {
        requestAnimationFrame(animate);
        tickingRef.current = true
      }
    }
    const animate = () => {
      const r = ref.current.getBoundingClientRect()
      const vpHeight = window.innerHeight
      const p = (r.top + r.height) / (vpHeight + r.height)
      const pos = strength * p;
      const transform = `translate3d(-50%, ${-pos}px, 0)`
      setImgStyle(prevState => ({
        ...prevState, WebkitTransform: transform, transform
      }))
    }
    if (inView) {
      window.addEventListener("scroll", onScroll, false);
    } else {
      window.removeEventListener("scroll", onScroll, false);
    }
    return () => window.removeEventListener("scroll", onScroll, false);
  }, [inView]);

  useEffect(() => {
    tickingRef.current = false
  }, [imgStyle]);

  return (
    <div className="parallax" ref={setRefs} style={wrapperStyle}>
      <div className="parallax-content" style={childrenStyle}>{children}</div>
      <picture>
        <source type="image/webp" srcSet={image.childImageSharp.fluid.srcSetWebp} sizes={image.childImageSharp.fluid.sizes} />
        <source type="image/jpeg" srcSet={image.childImageSharp.fluid.srcSet} sizes={image.childImageSharp.fluid.sizes} />
        <img 
          src={image.childImageSharp.fluid.src}
          srcSet={image.childImageSharp.fluid.srcSet}
          sizes={image.childImageSharp.fluid.sizes}
          loading="lazy"
          style={imgStyle}
        />
      </picture>
    </div>
  )
}
export default LazyParallax

/* <PreviewCompatibleImage imageInfo={{image, imgStyle}} />  */