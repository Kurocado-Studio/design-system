<template>
  <AnimatePresence>
    <component :is="FadeInElement" v-bind="allProps">
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
  typeof tag.value === 'object'
    ? tag.value
    : get(motion, [as.value ?? 'div'], 'div');

const allProps = computed(() => {
  return {
    ...props,
    ...createFadeProps({
      ...props,
      shouldReduceMotion: shouldReduceMotion.value,
    } as FadeInProps),
  };
});
</script>
