<template>
  <div :class="mergedClass" v-bind="$attrs"><slot></slot></div>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

import { cardHeaderClasses } from '../../../lib';

const cardPropsAttributes = useAttrs();

const mergedClass = computed(() => {
  return twMerge(
    cardHeaderClasses(),
    get(cardPropsAttributes, ['value']) as string | undefined,
  );
});
</script>
