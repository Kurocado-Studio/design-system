import React, { type PropsWithChildren, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  type CardComponentProps,
  cardBodyClasses,
  cardComponentWrapperClasses,
  cardFooterClasses,
  cardHeaderClasses,
  composeAnimationProps,
} from '../../../lib';
import { MotionElement } from '../motion';

export type CardProps<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
> = PropsWithChildren<CardComponentProps<T, K>>;

function CardHeader<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
>(props: CardProps<T, K>): ReactNode {
  return (
    <MotionElement
      {...props}
      {...composeAnimationProps(props)}
      className={twMerge(cardHeaderClasses(), props.className)}
    />
  );
}

function CardFooter<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
>(props: CardProps<T, K>): ReactNode {
  return (
    <MotionElement
      {...props}
      {...composeAnimationProps(props)}
      className={twMerge(cardFooterClasses(), props.className)}
    />
  );
}

function CardBody<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
>(props: CardProps<T, K>): ReactNode {
  return (
    <MotionElement
      {...props}
      {...composeAnimationProps(props)}
      className={twMerge(cardBodyClasses(), props.className)}
    />
  );
}

export function Card<
  T extends HTMLElement = HTMLDivElement,
  K extends keyof HTMLElementTagNameMap = 'div',
>(props: CardProps<T, K>): ReactNode {
  return (
    <MotionElement
      {...props}
      {...composeAnimationProps(props)}
      className={twMerge(cardComponentWrapperClasses(), props.className)}
    />
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
