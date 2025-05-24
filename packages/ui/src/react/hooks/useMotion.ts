import { useCallback } from 'react';

import {
  type MotionLayoutComposer,
  createFadeProps,
  createStaggerContainerProps,
} from '../../lib';

export const useMotion: MotionLayoutComposer = () => {
  return {
    createStaggerContainerProps: useCallback(createStaggerContainerProps, []),
    createFadeProps: useCallback(createFadeProps, []),
  };
};
