/* eslint-disable import/order */
/**
 * TODO: fix mismatch between ESLint sort order still
 */
import { get } from 'lodash-es';

import { type MotionProps, type Variants } from '../../types/index';
import {
  DEFAULT_FADE_IN_SPEED,
  DEFAULT_STAGGER_SPEED,
  DEFAULT_TRANSITION_DURATION,
  DEFAULT_VIEWPORT,
} from './constants';
import { FadeInDirection } from './enums';
import { type FadePropsOptions } from './types';

export function createFadeProps<T extends keyof HTMLElementTagNameMap>(
  payload: Partial<FadePropsOptions<T>>,
): Partial<MotionProps> {
  const { shouldReduceMotion, isInStaggerGroup } = payload;

  const staggerOrder = get(payload, ['staggerOrder'], 0);
  const fadeInDirection = get(
    payload,
    ['fadeInDirection'],
    FadeInDirection.DEFAULT,
  );

  const rawSpeed = Math.abs(
    get(payload, ['fadeInSpeed'], DEFAULT_FADE_IN_SPEED),
  );

  const transitionDuration = Math.abs(
    get(payload, ['transitionDuration'], DEFAULT_TRANSITION_DURATION),
  );

  const viewport = get(payload, ['viewport'], DEFAULT_VIEWPORT);

  const positiveSpeed = shouldReduceMotion ? 0 : rawSpeed;
  const negativeSpeed = shouldReduceMotion ? 0 : -rawSpeed;

  const variantMap: { [K in FadeInDirection]: Variants } = {
    [FadeInDirection.DEFAULT]: {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.UP]: {
      hidden: { opacity: 0, y: positiveSpeed },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.DOWN]: {
      hidden: { opacity: 0, y: negativeSpeed },
      visible: { opacity: 1, y: 0 },
    },
    [FadeInDirection.LEFT_TO_RIGHT]: {
      hidden: { opacity: 0, x: negativeSpeed },
      visible: { opacity: 1, x: 0 },
    },
    [FadeInDirection.RIGHT_TO_LEFT]: {
      hidden: { opacity: 0, x: positiveSpeed },
      visible: { opacity: 1, x: 0 },
    },
  };

  return {
    variants: get(variantMap, [fadeInDirection], variantMap.DEFAULT),
    transition: {
      duration: transitionDuration,
      delay: staggerOrder * DEFAULT_STAGGER_SPEED,
    },
    ...(!isInStaggerGroup && {
      initial: 'hidden',
      whileInView: 'visible',
      viewport,
    }),
  };
}
