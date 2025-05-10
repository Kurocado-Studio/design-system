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

import { composeAnimationProps, modelTypography } from '../../../lib';
import { TypographyProps } from './types';

const inputPropsAttributes = useAttrs() as TypographyProps;

const tag = computed(() => get(inputPropsAttributes, ['tag'], 'p'));

const MotionElement = get(motion, [tag.value]);

const mergedClass = computed(() =>
  twMerge(modelTypography(inputPropsAttributes), inputPropsAttributes.class),
);

const typographyProps = computed(() => ({
  ...inputPropsAttributes,
  ...composeAnimationProps(inputPropsAttributes),
}));
</script>
