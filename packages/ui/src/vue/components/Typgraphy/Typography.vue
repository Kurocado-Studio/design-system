<template>
  <!-- @vue-tsc-ignore -->
  <component :is="MotionElement" v-bind="typographyProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import { composeAnimationProps, modelTypography } from '../../../lib';
import { TypographyProps } from './types';

const props = defineProps<TypographyProps>();

const MotionElement = get(motion, [props.as ?? 'p']);

const typographyProps = computed(() => ({
  ...composeAnimationProps(props),
  class: twMerge(modelTypography(props), props.class),
}));
</script>
