<template>
  <component :is="Comp" v-bind="props as MotionProps" />
</template>

<script setup lang="ts">
import { motion } from 'motion-v';
import type { MotionProps } from 'motion-v';
import { computed } from 'vue';

type MotionElementProps<T extends keyof HTMLElementTagNameMap = 'div'> =
  MotionProps<T, HTMLElementTagNameMap[T]> & {
    as?: T;
  };

const props = defineProps<MotionElementProps>();

const Comp = computed(() => motion[props.as || 'div']);
</script>
