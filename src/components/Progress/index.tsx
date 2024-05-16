import React from 'react';
import renderToBody from '@utils/renderToContainer';
import styles from './index.module.less';

type ProgressProps = {
  onAnimationEnd?: (e: React.AnimationEvent) => void;
};

const ProgressBar: React.FC<ProgressProps> = ({ onAnimationEnd }) => {
  return (
    <div className={styles['progress-bar']} onAnimationEnd={onAnimationEnd} />
  );
};

export class Progress {
  loadingBarEntered: boolean;
  isDone: boolean;
  isRunning: boolean;
  unmount: (() => void) | undefined;

  constructor() {
    this.loadingBarEntered = false;
    this.isDone = false;
    this.isRunning = false;
    this.unmount = undefined;
  }
  ummount() {
    this.unmount?.();
    this.isDone = false;
    this.isRunning = false;
    this.loadingBarEntered = false;
  }
  onAnimationEnd({ animationName }: React.AnimationEvent) {
    if (animationName == styles['progress']) {
      this.loadingBarEntered = true;
      if (this.isDone) {
        this.ummount();
      }
    }
  }
  start() {
    this.isDone = false;
    if (!this.isRunning) {
      this.unmount = renderToBody(
        <ProgressBar onAnimationEnd={this.onAnimationEnd.bind(this)} />,
      );
    }

    this.isRunning = true;
  }

  done() {
    if (this.loadingBarEntered) {
      this.ummount();
    } else {
      this.isDone = true;
    }
  }
}

export default ProgressBar;

export const progress = new Progress();
