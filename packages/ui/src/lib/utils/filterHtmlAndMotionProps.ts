import { filterDOMProps } from '@react-aria/utils';

import { isValidMotionHtmlProp } from '../domain';

export function filterHtmlAndMotionProps<T extends Record<symbol, unknown>>(
  props: T,
): T {
  const motionOnly = Object.fromEntries(
    Object.entries(props).filter(([key]) => {
      return isValidMotionHtmlProp(key);
    }),
  );
  return {
    ...filterDOMProps(props),
    ...motionOnly,
  } as T;
}
