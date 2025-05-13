<template>
  <MotionElement :class="mergedClass" v-bind="props">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import { avatarStyles } from '../../../lib';
import { AvatarProps } from './types';

const props = defineProps<AvatarProps>();

const MotionElement = get(motion, ['img']);

const mergedClass = computed(() => twMerge(avatarStyles(props), props.class));
</script>
