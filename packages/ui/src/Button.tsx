import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): React.ReactNode {
  return (
    <button type='button' data-testid='button-data-testid' {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
