/* eslint import/no-default-export: 0 */
import { Card, CardBody, Grid, type GridProps } from '@kurocado-studio/ui/vue';
import type { StoryObj } from '@storybook/vue3';

export default {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description:
        'Number of columns or responsive map, e.g. `"3"` or `{ base: "1", md: "4" }`',
    },
    rows: {
      control: 'object',
      description:
        'Number of rows or responsive map, e.g. `"2"` or `{ base: "1", md: "3" }`',
    },
    direction: {
      control: 'object',
      description:
        'Flow direction: `"vertical"` or `"horizontal"`, or responsive map',
    },
    gap: {
      control: 'object',
      description:
        'Gap size or responsive map, e.g. `"4"` or `{ base: "2", md: "6" }`',
    },
    justify: {
      control: 'object',
      description:
        'Justify-items or responsive map, e.g. `"start"` or `{ md: "center" }`',
    },
    items: {
      control: 'object',
      description:
        'Align-items or responsive map, e.g. `"stretch"` or `{ lg: "end" }`',
    },
    minW: {
      control: 'object',
      description:
        'Min-width or responsive map, e.g. `"full"` or `{ md: "0" }`',
    },
    minH: {
      control: 'object',
      description:
        'Min-height or responsive map, e.g. `"screen"` or `{ lg: "max" }`',
    },
    children: { table: { disable: true } },
  },
};

type Story = StoryObj<GridProps>;

// This will render the grid with the specified number of cards
const renderGrid =
  (boxes: number): ((args: unknown) => unknown) =>
  (args: unknown): unknown => ({
    components: { Grid, Card, CardBody },
    setup() {
      // Create an array of boxes to loop through in the template
      const items = Array.from({ length: boxes }, (_, i) => i + 1);
      return { items, args };
    },
    template: `
    <Grid v-bind="args">
      {{console.log({args})}}
      <Card v-for="item in items" :key="item" class="w-full">
        <CardBody>{{ item }}</CardBody>
      </Card>
    </Grid>
  `,
  });

export const DefaultStatic: Story = {
  name: 'Default (Static)',
  args: {
    columns: '3',
    rows: '2',
    gap: '4',
  },
  render: renderGrid(6),
};

export const ColumnsResponsive: Story = {
  name: 'Columns Responsive',
  args: {
    columns: { base: '1', md: '3', lg: '5' },
    rows: '1',
    gap: '4',
  },
  render: renderGrid(8),
};

export const RowsResponsive: Story = {
  name: 'Rows Responsive',
  args: {
    columns: '1',
    rows: { base: '1', md: '2', lg: '4' },
    gap: '4',
  },
  render: renderGrid(8),
};

export const DirectionResponsive: Story = {
  name: 'Direction Responsive',
  args: {
    columns: '4',
    rows: '1',
    direction: { base: 'vertical', md: 'horizontal' },
    gap: '4',
  },
  render: renderGrid(6),
};

export const AlignmentResponsive: Story = {
  name: 'Alignment Responsive',
  args: {
    columns: '3',
    rows: '1',
    gap: '4',
    justify: { base: 'start', md: 'center', lg: 'between' },
    items: { base: 'start', md: 'center', lg: 'end' },
  },
  render: renderGrid(6),
};

export const SizeResponsive: Story = {
  name: 'Min-Size Responsive',
  args: {
    columns: '2',
    rows: '1',
    gap: '4',
    minW: { base: '0', md: 'full', lg: 'fit' },
    minH: { base: '0', md: 'screen', lg: 'max' },
  },
  render: renderGrid(4),
};

export const ColumnsPerBreakpoint: Story = {
  name: 'Columns Per Breakpoint',
  args: {
    columns: {
      base: '1',
      sm: '2',
      md: '3',
      lg: '4',
      xl: '5',
      '2xl': '6',
    },
    rows: '1',
    gap: '4',
  },
  render: renderGrid(6),
};

export const RowsPerBreakpoint: Story = {
  name: 'Rows Per Breakpoint',
  args: {
    columns: '1',
    rows: {
      base: '1',
      sm: '2',
      md: '3',
      lg: '4',
      xl: '5',
      '2xl': '6',
    },
    gap: '4',
  },
  render: renderGrid(6),
};
