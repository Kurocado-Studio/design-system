<template>
  <MotionElement v-bind="props as Record<string, unknown>" :class="mergedClass">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import {  computed, useAttrs } from 'vue';
import type { ImgHTMLAttributes } from '@vue/runtime-dom';

import {
  type AvatarProps as AvatarPropsBase,
  avatarStyles,
} from '../../../lib';

export type AvatarProps = AvatarPropsBase & {
  class?: string;
} & ImgHTMLAttributes;
/**
 * tsc and vue-sfc are colliding on type generation at the moment,
 * making vue-sfc choke and bail out
 */
const props = defineProps</* @vue-ignore */ AvatarProps>();

const MotionElement = get(motion, ['img']);

const attributes = useAttrs();

const mergedClass = computed(() =>
  twMerge(avatarStyles({ ...props, ...attributes }), props.class as string),
);
</script>
