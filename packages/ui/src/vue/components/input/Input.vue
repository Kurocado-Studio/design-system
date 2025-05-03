<template>
  <MotionInput :class="mergedClass" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

import { cursorStyles, inputStyles } from 'src/lib';

const MotionInput = get(motion, ['input']);

const inputPropsAttributes = useAttrs();

const mergedClass = computed(() =>
  twMerge(
    inputStyles(inputPropsAttributes),
    cursorStyles(inputPropsAttributes),
    get(inputPropsAttributes, ['className']) as string | undefined,
  ),
);
</script>
