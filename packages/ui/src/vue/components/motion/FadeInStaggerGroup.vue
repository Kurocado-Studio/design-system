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
import { computed, toRefs, useAttrs } from 'vue';

import { createStaggerContainerProps } from '../../../lib';
import { FadeInStaggerGroupProps } from './types';

const props = defineProps<FadeInStaggerGroupProps>();
const { staggerSpeed, tag, ...rest } = toRefs(props);

const containerProps = computed(() =>
  createStaggerContainerProps({ staggerSpeed: staggerSpeed.value }),
);

const Component = computed(() => {
  if (typeof tag.value === 'function') {
    return tag.value;
  }
  console.log({ tag });
  // @ts-ignore
  return get(motion, [tag.value ?? 'div']);
});

const allProps = computed(() => {
  return {
    ...rest,
    ...containerProps.value,
  };
});
</script>
