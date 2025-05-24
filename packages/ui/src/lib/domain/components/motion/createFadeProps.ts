import { get } from 'lodash-es';

import {
  DEFAULT_FADE_IN_SPEED,
  DEFAULT_TRANSITION_DURATION,
  DEFAULT_VIEWPORT,
} from './constants';
import { FadeInDirection } from './enums';
import { type FadePropsOptions } from './types';

export function createFadeProps<T extends keyof HTMLElementTagNameMap>(
  payload?: Partial<FadePropsOptions<T>>,
): Record<string, unknown> {
  const { shouldReduceMotion, isInStaggerGroup, staggerSpeed } = payload || {};

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

  const variantMap: { [K in FadeInDirection]: Record<string, unknown> } = {
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

  const delay =
    typeof staggerSpeed === 'number' && typeof staggerOrder === 'number'
      ? staggerOrder * staggerSpeed
      : undefined;

  const initialView = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport,
  };

  return {
    variants: get(variantMap, [fadeInDirection], variantMap.DEFAULT),
    ...(delay !== undefined && {
      transition: {
        duration: transitionDuration,
        delay,
      },
    }),
    ...(!isInStaggerGroup && initialView),
  };
}
