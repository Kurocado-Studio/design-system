/**
 * TODO: fix mismatch between ESLint sort order still
 */
import { type A11yButtonOptions, type ButtonVariants } from './types';

export type A11yButtonProps = {
  'aria-disabled'?: HTMLElementTagNameMap['button']['disabled'];
  onClick?: A11yButtonOptions['onClick'];
  onKeyDown?: HTMLElementTagNameMap['button']['onkeydown'];
  variant?: ButtonVariants;
  ghost?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  id?: string;
};

export function createA11yButtonProps({
  onClick,
  disabled = false,
  role = 'button',
  ...restProps
}: A11yButtonOptions): A11yButtonProps {
  const onKeyDown: HTMLElementTagNameMap['button']['onkeydown'] = (
    e: KeyboardEvent,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(e);
    }
  };

  return {
    ...restProps,
    role,
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || undefined,
    ...(disabled === undefined && {
      onClick,
      onKeyDown,
    }),
  } as A11yButtonProps;
}
