<template>
  <component :is="MotionElement" v-bind="typographyProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

import {
  type TypographyLayoutOptions,
  composeAnimationProps,
  modelTypography,
} from '../../../lib';

export interface TypographyProps extends TypographyLayoutOptions {
  as?: keyof HTMLElementTagNameMap;
  class?: string;
}
const props = defineProps<TypographyProps>();

const as = computed(() => get(props, ['as'], 'p'));

const MotionElement = get(motion, [as.value]);

const mergedClass = computed(() =>
  twMerge(modelTypography(props), props.class),
);

const typographyProps = computed(() => ({
  ...composeAnimationProps(props),
  class: mergedClass.value,
}));
</script>
