<template>
  <!--  @ts-ignore -->
  <MotionInput v-bind="inputProps" />
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, computed, useAttrs } from 'vue';

import { cursorStyles, inputStyles } from '../../../lib';

const attrs = useAttrs();

const props = defineProps</* @vue-ignore */ InputHTMLAttributes>();

const MotionInput = get(motion, ['input']);

const mergedClass = computed(() =>
  twMerge(
    inputStyles(props),
    cursorStyles(props),
    get(props, ['class']) as string | undefined,
  ),
);

const inputProps = computed(() => {
  const { style, ...rest } = attrs;
  return {
    ...rest,
    class: mergedClass.value,
  };
});
</script>
