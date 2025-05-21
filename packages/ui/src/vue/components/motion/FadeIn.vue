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
import { computed, toRefs, useAttrs } from 'vue';

import { type FadePropsOptions, createFadeProps } from '../../../lib';

export type FadeInProps<T extends keyof HTMLElementTagNameMap = 'div'> = Omit<
  FadePropsOptions,
  'tag'
> & {
  tag?: T | typeof motion;
};

const props = defineProps<FadeInProps>();
const additionalAttributes = useAttrs();
const { tag, as, ...rest } = toRefs(props);

const shouldReduceMotion = useReducedMotion();

const FadeInElement =
  typeof tag.value === 'object'
    ? tag.value
    : get(motion, [as.value ?? 'div'], 'div');

const allProps = computed(() => {
  return {
    ...props,
    ...additionalAttributes,
    ...createFadeProps({
      ...props,
      shouldReduceMotion: shouldReduceMotion.value,
    } as FadeInProps),
  };
});
</script>
