import React from 'react';

export type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({ children, ...other }: ButtonProps): React.ReactNode {
  return (
    <button type='button' data-testid='button-testid' {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
