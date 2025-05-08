<template>
  <MotionInput :class="mergedClass" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, computed, defineProps, useAttrs } from 'vue';

import { cursorStyles, inputStyles } from 'src/lib';

defineProps</* @vue-ignore */ InputHTMLAttributes>();

const MotionInput = get(motion, ['input']);

const inputPropsAttributes = useAttrs();

const mergedClass = computed(() =>
  twMerge(
    inputStyles(inputPropsAttributes),
    cursorStyles(inputPropsAttributes),
    get(inputPropsAttributes, ['class']) as string | undefined,
  ),
);
</script>
