import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import cs from 'classnames';
import styles from './index.module.less';
import Controls from './Controls';
import Volume from './Volume';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { playerScheduler } from './scheduler';
import { uniqueId } from 'lodash';
import { Spin } from '..';

type VideoPlayerProps = {
  url: string;
  playing?: boolean;
  inViewer?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  style?: React.CSSProperties;
  controls?: boolean;
  disabledSchedule?: boolean;
  playWhenInView?: boolean;
};

const classPrefix = 'video-player';

const threshold = [0.25, 0.75, 0.99, 1].concat(
  new Array(10).fill(undefined).map(function (a, b) {
    return b / 10;
  }),
);

const VideoPlayer: React.FC<VideoPlayerProps> = props => {
  const {
    url,
    inViewer,
    containerRef,
    className,
    style,
    controls,
    disabledSchedule = false,
    playWhenInView = false,
  } = props;
  const [muted, setMuted] = useState<boolean>(true);
  const [playing, setPlaying] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);
  const [inViewed, setInViewed] = useState<boolean>(false);

  const playerRef = React.useRef<ReactPlayer>(null);
  const playingRef = React.useRef<boolean>(false);
  const isStopedByVisibilityChangeRef = React.useRef<boolean>(false);
  const idRef = React.useRef<string>(uniqueId());
  const _containerRef = React.useRef<HTMLDivElement>(null);
  const [nearBottom, setNearBottom] = useState<boolean>(false);

  const hasControls = (controls || inViewer) && ready;

  const [inViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: !playWhenInView,
  });

  useEffect(() => {
    function onResize() {
      const node = _containerRef?.current;
      if (node) {
        const distanceToBottom =
          window.innerHeight - node.getBoundingClientRect().bottom;
        setNearBottom(distanceToBottom <= 20);
      }
    }
    setTimeout(onResize);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [_containerRef?.current, inViewer]);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      inViewRef(node);
      if (containerRef) {
        //@ts-ignore
        containerRef.current = node;
      }
    },
    [inViewRef],
  );

  useEffect(() => {
    props?.playing !== undefined && setPlaying(props?.playing as boolean);
  }, [props.playing]);

  useEffect(() => {
    if (inView) {
      setInViewed(true);
    }
    if (!playWhenInView) return;
    setTimeout(() => {
      setPlaying(inView);
    });
  }, [inView, playWhenInView]);

  useEffect(() => {
    const focus = () => {
      if (isStopedByVisibilityChangeRef.current) {
        setPlaying(true);
        isStopedByVisibilityChangeRef.current = false;
      }
    };
    const blur = () => {
      if (playingRef?.current) {
        setPlaying(false);
        isStopedByVisibilityChangeRef.current = true;
      }
    };

    window.addEventListener('focus', focus);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('focus', focus);
      window.removeEventListener('blur', blur);
    };
  }, []);

  useEffect(() => {
    return () => {
      playerScheduler.removePlayer(idRef.current);
    };
  }, []);

  const observerParams = useMemo(() => {
    return {
      threshold,
      rootMargin: '-56px 0px 0px 0px',
      root: null,
    };
  }, []);

  const entry = useCallback(
    ([entry]: any) => {
      if (!inViewed) return;
      playerScheduler.setPlayer(idRef.current, {
        setPlaying(playing) {
          setPlaying(playing);
        },
        rect: DOMRectReadOnly.fromRect(entry.boundingClientRect),
        visiblePercentage: entry.intersectionRatio,
      });
      playerScheduler.play();
    },
    [inViewed, playWhenInView, disabledSchedule, ready, hasControls],
  );

  useIntersectionObserver(
    (disabledSchedule ? null : _containerRef) as any,
    observerParams,
    entry,
  );

  return (
    <div
      className={cs(styles[`${classPrefix}`], className)}
      style={style}
      ref={setRefs}
    >
      {inViewed && (
        <div className={styles[`${classPrefix}-inner`]} ref={_containerRef}>
          <ReactPlayer
            ref={playerRef}
            muted={muted}
            className={styles[`${classPrefix}-audio`]}
            url={url}
            loop={true}
            playing={playing}
            playsinline={true}
            preload="none"
            width="100%"
            height="100%"
            onReady={() => {
              setReady(true);
            }}
            progressInterval={200}
            onProgress={({ played }) => {
              playing && hasControls && setPercentage(played);
              console.log(played, 'percentage');
            }}
          />
          {!ready && (
            <Spin
              spinning
              size={18}
              className={styles[`${classPrefix}-inner-spin`]}
            />
          )}
          <Volume
            muted={muted}
            inViewer={inViewer}
            nearBottom={nearBottom}
            onClick={() => {
              ready && setMuted(v => !v);
            }}
          />
          {hasControls && (
            <Controls
              percentage={percentage}
              nearBottom={nearBottom}
              ready={ready}
              onPause={() => {
                setPlaying(false);
              }}
              onSeekTo={percentage => {
                playerRef.current?.seekTo(percentage, 'fraction');
                console.log(percentage, 'onSeekTo');
                //setCurrentTime(time);
                setTimeout(() => setPlaying(true), 100);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
