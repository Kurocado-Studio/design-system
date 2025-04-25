<template>
  <div :class="mergedClass" v-bind="$attrs"><slot></slot></div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';
import { computed, toRefs } from 'vue';

import { type CardProps } from 'src/lib';
import { cardComponentWrapperClasses } from 'src/lib';

const props = defineProps<CardProps>();

const { className } = toRefs(props);

const mergedClass = computed(() => {
  return twMerge(cardComponentWrapperClasses(), className.value);
});
</script>
