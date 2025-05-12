<template>
  <AnimatePresence>
    <MotionElement :as="IntrinsicElement" v-bind="allProps">
      <slot />
    </MotionElement>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { get } from 'lodash-es';
import { AnimatePresence, motion, useReducedMotion } from 'motion-v';
import { computed, useAttrs } from 'vue';

import { createFadeProps } from '../../../lib';
import MotionElement from './MotionElement.vue';
import { FadeInProps } from './types';

const props = useAttrs() as FadeInProps;

const shouldReduceMotion = useReducedMotion();

const IntrinsicElement = computed(() => {
  const { tag } = props;
  if (typeof tag === 'object' || typeof tag === 'function') {
    return tag;
  }
  return get(motion, [tag ?? 'div']);
});

console.log({ IntrinsicElement });
const allProps = computed(() => {
  const {
    fadeInDirection,
    fadeInSpeed,
    staggerOrder,
    isInStaggerGroup,
    tag,
    transitionDuration,
    viewport,
    ...restProps
  } = props;

  return {
    ...restProps,
    ...createFadeProps({
      fadeInDirection,
      fadeInSpeed,
      transitionDuration,
      shouldReduceMotion: shouldReduceMotion.value,
    }),
  };
});
</script>
