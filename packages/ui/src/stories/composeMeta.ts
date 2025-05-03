import type { InputProps, Meta } from '../lib';

export const composeMeta = (
  component: unknown,
  meta: Meta<InputProps>,
): Meta<InputProps> => {
  return {
    component: component as Meta['component'],
    tags: ['autodocs'],
    ...meta,
  };
};
