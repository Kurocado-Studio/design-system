<template>
  <AnimatePresence>
    <component :is="Component" v-bind="allProps">
      <slot />
    </component>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { get } from 'lodash-es';
import { AnimatePresence, motion } from 'motion-v';
import { computed, useAttrs } from 'vue';

import { createStaggerContainerProps } from '../../../lib';
import { FadeInStaggerGroupProps } from './types';

const attributes = useAttrs() as FadeInStaggerGroupProps;

const containerProps = computed(() =>
  createStaggerContainerProps({ staggerSpeed: attributes.staggerSpeed }),
);

const Component = computed(() => {
  const { tag } = attributes;
  if (typeof tag === 'object' || typeof tag === 'function') {
    return tag;
  }
  return get(motion, [tag ?? 'div']);
});

const allProps = computed(() => {
  const { tag, staggerSpeed, ...rest } = attributes as any;
  return {
    ...rest,
    ...containerProps.value,
  };
});
</script>
