<template>
  <div :class="mergedClass" v-bind="$attrs"><slot></slot></div>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import { cardComponentWrapperClasses } from '../../../lib';
import { CardProps } from './types';

const props = defineProps<CardProps>();

const mergedClass = computed(() => {
  return twMerge(
    cardComponentWrapperClasses(),
    get(props, ['class']) as string | undefined,
  );
});
</script>
