<template>
  <MotionElement :class="mergedClass" v-bind="animationProps">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed, defineProps, useAttrs } from 'vue';

import {
  type TypographyLayoutOptions,
  composeAnimationProps,
  modelTypography,
} from 'src/lib';

export interface TypographyProps extends TypographyLayoutOptions {
  tag?: keyof HTMLElementTagNameMap;
  class?: string;
}
const inputPropsAttributes = useAttrs() as TypographyProps;
defineProps<TypographyProps>();
const tag = computed(() => get(inputPropsAttributes, ['tag'], 'p'));

const MotionElement = get(motion, [tag.value]);

const mergedClass = computed(() =>
  twMerge(modelTypography(inputPropsAttributes), inputPropsAttributes.class),
);

const animationProps = computed(() => ({
  ...inputPropsAttributes,
  ...composeAnimationProps(inputPropsAttributes),
}));
</script>
