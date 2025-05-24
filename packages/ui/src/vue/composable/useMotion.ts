import {
  type MotionLayoutComposer,
  createFadeProps,
  createStaggerContainerProps,
} from '../../lib';

export const useMotion: MotionLayoutComposer = () => {
  return {
    createStaggerContainerProps,
    createFadeProps,
  };
};
