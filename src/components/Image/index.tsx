import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';
import Spin from '../Spin';
import './index.module.less';

export type ImageProps = {
  lazy?: boolean;
  hasSpin?: boolean;
  stylexStyles?: StyleXStyles;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({
  lazy = true,
  onLoad,
  style,
  stylexStyles,
  hasSpin = true,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setLoaded(false);
  }, [props.src]);

  const src = lazy ? (inView ? props.src : '') : props.src;
  const srcSet = lazy ? (inView ? props.srcSet : '') : props.srcSet;

  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {!inView && <div ref={inViewRef} />}
      <img
        {...stylex.props(stylexStyles)}
        onLoad={e => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
        style={{
          ...style,
          display: loaded ? style?.display : 'none',
        }}
        srcSet={srcSet}
        src={src}
        ref={imgRef}
      />
      {hasSpin && <Spin spinning={!loaded} size={18} />}
    </>
  );
};

export default Image;
