<template>
  <Typography v-bind="labelAttrs" :class="props.class">
    <slot />
  </Typography>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { composeLabel } from '../../../lib';
import Typography from './Typography.vue';
import { LabelProps } from './types';

const props = defineProps<LabelProps>();

const labelAttrs = computed(() => {
  return composeLabel(props);
});
</script>
