<template>
  <component :is="Comp" v-bind="props" />
</template>

<script setup lang="ts">
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import type { MotionProps } from 'motion-v';
import { defineProps } from 'vue';

const props = defineProps<MotionProps & { as?: keyof HTMLElementTagNameMap }>();

const Comp = get(motion, [props.as ?? 'div']);
</script>
