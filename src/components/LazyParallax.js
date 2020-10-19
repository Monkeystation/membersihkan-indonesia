import React from 'react';
//import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax'

const LazyParallax = ({ children, ...props }) => {

  return (
    <InView triggerOnce={true} rootMargin="500px">
    {({ inView, ref, entry }) => {
      return (inView) ? (
        <div ref={ref}>
          <Parallax {...props}>
              {children}
          </Parallax>
        </div>
      ) : (<div ref={ref} className="react-parallax-content">{children}</div>)
    }}
    </InView>
  )
}

export default LazyParallax