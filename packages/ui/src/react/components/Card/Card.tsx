import React, { type PropsWithChildren, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type CardComponentProps,
  cardBodyClasses,
  cardComponentWrapperClasses,
  cardFooterClasses,
  cardHeaderClasses,
} from '../../../lib';
import { MotionElement } from '../motion';

export interface CardProps extends PropsWithChildren<CardComponentProps> {}

function CardHeader(props: CardProps): ReactNode {
  return (
    <MotionElement
      className={twMerge(cardHeaderClasses(), props.className)}
      {...props}
    />
  );
}

function CardFooter(props: CardProps): ReactNode {
  return (
    <MotionElement
      className={twMerge(cardFooterClasses(), props.className)}
      {...props}
    />
  );
}

function CardBody(props: CardProps): ReactNode {
  return (
    <MotionElement
      className={twMerge(cardBodyClasses(), props.className)}
      {...props}
    />
  );
}

export function Card(props: CardProps): ReactNode {
  return (
    <MotionElement
      className={twMerge(cardComponentWrapperClasses(), props.className)}
      {...props}
    />
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
