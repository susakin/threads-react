import * as stylex from '@stylexjs/stylex';

export const vars = stylex.create({
  activeScale: (scale: number = 0.95) => ({
    transition: 'transform 0.1s ease-in-out',
    'transform-origin': 'center center',
    ':active': {
      transform: `scale(${scale})`,
    },
  }),

  hoverScale: (scale: number = 1.07) => ({
    transition: 'transform 0.2s',
    'transform-origin': 'center center',
    ':hover': {
      transform: `scale(${scale})`,
    },
  }),
  text: (color, fontSize, lineHeight, fontWeight) => ({
    'min-width': 0,
    'max-width': '100%',
    color,
    'text-align': 'left',
    fontWeight,
    'word-wrap': 'break-word',
    'font-family': 'var(--font-family-system)',
    fontSize,
    'word-break': 'break-word',
    'white-space': 'pre-line',
    lineHeight,
  }),
});

const fadeInKeyFrames = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeIn = stylex.create({
  fadeIn: {
    'animation-name': fadeInKeyFrames,
    'animation-duration': '0.2s',
  },
});

const scrollInKeyFrames = stylex.keyframes({
  from: { opacity: 0, transform: 'scaleY(0)' },
  to: { opacity: 1, transform: 'scaleY(1)' },
});

export const scrollIn = stylex.create({
  scrollIn: {
    'animation-duration': ' 0.15s',
    'transform-origin': 'bottom',
    'animation-timing-function': 'ease-in-out',
    'animation-name': scrollInKeyFrames,
  },
});

export const media = stylex.create({
  media: {
    'min-width': 0,
    'user-select': 'none',
    'align-items': 'stretch',
    position: 'relative',
    'border-radius': '8px',
    border: '1px solid var(--barcelona-primary-outline)',
    'flex-shrink': 0,
    overflow: 'hidden',
    transition: 'transform 0.1s ease-in-out',
    'transform-origin': 'center center',
    ':active': {
      transform: `scale(0.98)`,
    },
  },
  mediaImg: {
    'max-width': '100%',
    'max-height': '100%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    'object-fit': 'cover',
    'border-radius': 'inherit',
    'user-select': 'none',
  },
  mediaVideo: {
    'object-fit': 'cover',
    width: '100%',
    display: 'block',
    height: '100%',
    'user-select': 'none',
    cursor: 'pointer',
  },
  mediaViewContent: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'box-sizing': 'border-box',
    width: '100%',
    height: '100%',
    '@media (min-width: 768px)': {
      'padding-right': 'var(--barcelona-lightbox-horizontal-padding)',
      'padding-left': 'var(--barcelona-lightbox-horizontal-padding)',
    },
  },
});
