import { get } from 'lodash-es';

import { DEFAULT_STAGGER_SPEED, DEFAULT_VIEWPORT } from './constants';
import { type Framework, type MotionIntrinsicProps } from '../../types';

export function createStaggerContainerProps<
  T extends string,
  K extends Framework,
>(options: { staggerSpeed?: number }): Partial<MotionIntrinsicProps<T, K>> {
  const staggerSpeed = get(options, ['staggerSpeed'], DEFAULT_STAGGER_SPEED);

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: DEFAULT_VIEWPORT,
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: staggerSpeed } },
    },
  } as MotionIntrinsicProps<T, K>;
}
