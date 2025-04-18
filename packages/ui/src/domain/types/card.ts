import type { HTMLMotionProps } from 'framer-motion';

import type { ChildrenType } from './index';

export interface CardVariantToken {
  bg: string;
  fg: string;
  radius: string;
  padding: string;
  paddingBody: string;
  paddingHeader: string;
  paddingFooter: string;
}

export interface ReactCardProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: ChildrenType;
}

export interface VueCardProps {
  className?: string;
}
