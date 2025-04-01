import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export interface CardProps extends React.PropsWithChildren {
  className?: string;
}

export interface CardHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export interface CardFooterProps extends React.PropsWithChildren {
  className?: string;
}

export interface CardBodyProps extends React.PropsWithChildren {
  className?: string;
}

const cardHeaderClasses = tv({
  base: 'px-4 py-5 sm:p-6 dark:text-white',
});

const cardFooterClasses = tv({
  base: 'bg-gray-50 px-4 py-4 sm:px-6 dark:bg-gray-700 dark:text-white',
});

const cardClasses = tv({
  base: 'divide-y divide-gray-200  overflow-hidden rounded-lg shadow bg-white dark:bg-gray-800',
});

const cardBodyClasses = tv({
  base: 'px-4 py-5 sm:p-6 dark:text-white',
});

function CardHeader({
  children,
  className,
}: CardHeaderProps): React.ReactElement {
  return (
    <div className={twMerge(cardHeaderClasses(), className)}>{children}</div>
  );
}

function CardFooter({
  children,
  className,
}: CardFooterProps): React.ReactElement {
  return (
    <div className={twMerge(cardFooterClasses(), className)}>{children}</div>
  );
}

function CardBody({ children, className }: CardBodyProps): React.ReactElement {
  return (
    <div className={twMerge(cardBodyClasses(), className)}>{children}</div>
  );
}

export function Card({ children, className }: CardProps): React.ReactElement {
  return <div className={twMerge(cardClasses(), className)}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
