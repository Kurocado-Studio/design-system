<template>
  <MotionElement :class="mergedClass" v-bind="typographyProps">
    <slot />
  </MotionElement>
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
const inputPropsAttributes = useAttrs() as TypographyProps;

const as = computed(() => get(inputPropsAttributes, ['as'], 'p'));

const MotionElement = get(motion, [as.value]);

const mergedClass = computed(() =>
  twMerge(modelTypography(inputPropsAttributes), inputPropsAttributes.class),
);

const typographyProps = computed(() => ({
  ...inputPropsAttributes,
  ...composeAnimationProps(inputPropsAttributes),
}));
</script>
