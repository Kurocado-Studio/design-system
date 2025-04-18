import React from 'react';
import { twMerge } from 'tailwind-merge';

import { MotionElement } from 'src/components/motion';
import { cardStyles } from 'src/domain/infra/card';
import { type ReactCardProps } from 'src/domain/types/card';

export type CardProps = ReactCardProps;

function CardHeader({
  children,
  className,
  ...rest
}: ReactCardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardStyles.header(), className)}
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
}: ReactCardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardStyles.footer(), className)}
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
}: ReactCardProps): React.ReactNode {
  return (
    <MotionElement className={twMerge(cardStyles.body(), className)} {...rest}>
      {children}
    </MotionElement>
  );
}

export function Card({
  children,
  className,
  ...rest
}: ReactCardProps): React.ReactNode {
  return (
    <MotionElement
      className={twMerge(cardStyles.component(), className)}
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
