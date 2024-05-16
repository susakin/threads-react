import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  avatar: {
    borderRadius: '50%',
    backgroundColor: 'var(--barcelona-tertiary-background)',
    cursor: 'pointer',
    display: 'flex',
  },
  avatarImg: {
    'border-radius': '50%',
    'object-fit': 'cover',
    'outline-offset': '-0.5px',
    width: '100%',
    height: '100%',
    outline: '0.5px solid var(--barcelona-primary-outline)',
  },
  link: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
