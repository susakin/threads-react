import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  animatedScrollArea: {
    'overflow-x': 'auto',
    display: 'flex',
    'flex-direction': 'row',
    cursor: 'grab',
    '::-webkit-scrollbar': {
      width: 0,
      height: 0,
      display: 'none',
    },
  },
  animatedScrollAreaNotDisabledCusor: {
    ':active': {
      cursor: 'grabbing',
    },
  },
  animatedScrollAreaDisabled: {
    cursor: 'pointer',
  },
});

export default styles;
