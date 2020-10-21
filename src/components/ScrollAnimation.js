import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useInView } from 'react-intersection-observer'

const THRESHOLD = [0, 1];

const ScrollAnimation = ({ offset=150, animateIn, duration=1, animateOnce=false, initiallyVisible=false, style={}, className='', children }) => {
  const ref = useRef();
  const [inViewRef, inView, entry] = useInView({
    triggerOnce: animateOnce,
    threshold: THRESHOLD
  })
  const [classes, setClasses] = useState('animated')
  const [aniStyle, setAniStyle] = useState({
    animationDuration: `${duration}s`,
    opacity: initiallyVisible ? 1 : 0
  })

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    if (inView && entry.intersectionRatio === 1) {
      setClasses(`animated ${animateIn}`)
    }
  }, [entry]);

  useEffect(() => {
    if (!inView) {
      setClasses(`animated`)
      setAniStyle({
        opacity: initiallyVisible ? 1 : 0
      })
    }
  }, [inView]);

  return (
    <div ref={setRefs} className={`${className} ${classes}`} style={Object.assign({}, aniStyle, style)}>
      {children}
    </div>
  )
}

export default ScrollAnimation