/* eslint import/no-default-export: 0 */
import type { StoryObj } from '@storybook/react';

import { Daily001 } from '../src/Daily001';

export default {
  name: 'Daily UI 001 Test',
  component: Daily001,
};

export const Daily001Story: StoryObj = {
  name: 'Daily 001 (Login)',
  tags: ['autodocs'],
};
