<template>
  <component :is="TypographyElement" v-bind="typographyProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import { composeAnimationProps, modelTypography } from '../../../lib';
import { MotionElement } from '../motion';
import { TypographyProps } from './types';

const props = defineProps<TypographyProps>();

const as = computed(() => get(props, ['as'], 'p'));

const TypographyElement =
  typeof as.value === 'string' ? get(motion, [as.value]) : MotionElement;

const mergedClass = computed(() =>
  twMerge(modelTypography(props), props.class),
);

const typographyProps = computed(() => ({
  ...composeAnimationProps(props),
  class: mergedClass.value,
}));
</script>
