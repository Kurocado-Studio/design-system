/* eslint import/no-default-export: 0 */
import { StaggerContainerStories } from '@kurocado-studio/ui/stories';
import {
  Grid,
  type StaggerContainerProps,
  Typography,
  useMotion,
} from '@kurocado-studio/ui/vue';
import type { StoryObj } from '@storybook/vue3';

type Story = StoryObj<StaggerContainerProps>;

export default {
  ...StaggerContainerStories.meta,
  title: 'composable/useMotion/createStaggerContainerProps',
};

export const withStaggerSpeed: Story = {
  ...StaggerContainerStories.withStaggerSpeed,
  render: (args: StaggerContainerProps) => ({
    components: { Grid, Typography },
    setup() {
      const { createStaggerContainerProps, createFadeProps } = useMotion();
      const elements = Array.from({ length: 12 }, (_, index) => index);

      return {
        args,
        createStaggerContainerProps,
        createFadeProps,
        elements,
      };
    },
    template: `
      <!-- sidesteps the root issue: animation lifecycle and motion systems don't re-run just because props change. on storybook-->
      <Grid :key="JSON.stringify(args)" v-bind="createStaggerContainerProps(args)">
        <Typography
            v-for="index in elements"
            :key="index"
            as="p"
            v-bind="createFadeProps({ isInStaggerGroup: true })"
        >
          Element #{{ index }}
        </Typography>
      </Grid>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Grid v-bind="createStaggerContainerProps(props)">
    <Typography
      v-for="index in elements"
      :key="index"
      as="p"
      v-bind="createFadeProps({ isInStaggerGroup: true })"
    >
      Element #{{ index }}
    </Typography>
  </Grid>
</template>

<script setup lang="ts">
import { 
  Grid, 
  Typography, 
  type StaggerContainerProps, 
  useMotion 
} from '@kurocado-studio/ui/vue';

const { createStaggerContainerProps, createFadeProps } = useMotion();

const props = defineProps<StaggerContainerProps>();

const elements = Array.from({ length: 12 }, (_, index) => index);
</script>
        `.trim(),
        language: 'html',
      },
    },
  },
};
