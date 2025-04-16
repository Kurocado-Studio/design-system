import { type HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { MotionElement } from 'src/components/motion';
import { type ChildrenType } from 'src/domain/types';

export interface CardProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: ChildrenType;
}

export const cardHeaderClasses = tv({
  base: 'px-8 pt-8 pb-4 dark:text-gray-200',
});

export const cardFooterClasses = tv({
  base: 'bg-gray-50 px-8 pb-8 pt-6 dark:bg-gray-700 dark:text-white',
});

export const cardClasses = tv({
  base: 'divide-y divide-gray-200 dark:divide-gray-700  overflow-hidden rounded-2xl shadow bg-white dark:bg-gray-800',
});

export const cardBodyClasses = tv({
  base: 'px-8 py-8 dark:text-white',
});

function CardHeader({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardHeaderClasses(), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}

function CardFooter({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardFooterClasses(), className)}
      {...rest}
    >
      {children}
    </MotionElement>
  );
}

function CardBody({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement className={twMerge(cardBodyClasses(), className)} {...rest}>
      {children}
    </MotionElement>
  );
}

export function Card({
  children,
  className,
  ...rest
}: CardProps): React.ReactNode {
  return (
    <MotionElement className={twMerge(cardClasses(), className)} {...rest}>
      {children}
    </MotionElement>
  );
}

Card.Header = CardHeader;
// @ts-expect-error on displayName
Card.Header.displayName = 'Card.Header';

Card.Body = CardBody;
// @ts-expect-error on displayName
Card.Body.displayName = 'Card.Body';

Card.Footer = CardFooter;
// @ts-expect-error on displayName
Card.Footer.displayName = 'Card.Footer';
