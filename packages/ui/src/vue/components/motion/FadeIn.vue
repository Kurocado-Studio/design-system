<template>
  <AnimatePresence>
    <component :is="FadeInElement" :as="as" v-bind="allProps">
      <slot />
    </component>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { get } from 'lodash-es';
import { AnimatePresence, motion, useReducedMotion } from 'motion-v';
import { computed, toRefs } from 'vue';

import { createFadeProps } from '../../../lib';
import { FadeInProps } from './types';

const props = defineProps<FadeInProps>();
const { tag, as, ...rest } = toRefs(props);

const shouldReduceMotion = useReducedMotion();

const FadeInElement =
  typeof as.value === 'string'
    ? get(motion, [as.value])
    : get(tag, ['value'], motion.div);

const allProps = computed(() => {
  return {
    ...rest,
    ...createFadeProps({
      as: as.value,
      viewport: props.viewport,
      fadeInDirection: props.fadeInDirection,
      staggerOrder: props.staggerOrder,
      isInStaggerGroup: props.isInStaggerGroup,
      fadeInSpeed: props.fadeInSpeed,
      transitionDuration: props.transitionDuration,
      shouldReduceMotion: shouldReduceMotion.value,
    }),
  };
});
</script>
