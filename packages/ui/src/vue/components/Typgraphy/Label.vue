<template>
  <Typography v-bind="labelAttrs" :class="props.class">
    <slot />
  </Typography>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { type ComposeLabelOptions, composeLabel } from '../../../lib';
import Typography from './Typography.vue';

export type LabelProps = ComposeLabelOptions & {
  class?: string;
};

const props = defineProps<LabelProps>();

const labelAttrs = computed(() => {
  return composeLabel(props);
});
</script>
