import React from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type CardComponentProps as CardPropsType,
  cardBodyClasses,
  cardComponentWrapperClasses,
  cardFooterClasses,
  cardHeaderClasses,
} from 'src/lib';
import { MotionElement } from 'src/react/components/motion';

export interface CardProps extends React.PropsWithChildren<CardPropsType> {}

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
    <MotionElement
      className={twMerge(cardComponentWrapperClasses(), className)}
      {...rest}
    >
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
