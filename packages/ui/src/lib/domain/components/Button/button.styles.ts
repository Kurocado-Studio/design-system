import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { controlCommonStyles } from '../common';
import { type ButtonVariantToken } from './types';

const primary: ButtonVariantToken = {
  bg: 'bg-[GreenYellow] dark:bg-[Black]',
  text: 'text-gray-800 dark:text-[GreenYellow]',
  hover:
    'hover:bg-[Black] dark:hover:bg-[GreenYellow] hover:text-[GreenYellow] dark:hover:text-[Black]',
  pressed: 'pressed:text-[GreenYellow]/50',
};

const secondary: ButtonVariantToken = {
  text: 'text-gray-800 dark:text-gray-300',
  bg: 'bg-gray-100',
  hover: 'hover:bg-gray-200',
  pressed: 'pressed:bg-gray-300',
  darkText: 'dark:text-gray-100',
  darkBg: 'dark:bg-gray-600',
  darkHover: 'dark:hover:bg-gray-500',
  darkPressed: 'dark:pressed:bg-gray-400',
};

const destructive: ButtonVariantToken = {
  text: 'text-white',
  bg: 'bg-red-700',
  hover: 'hover:bg-red-800',
  pressed: 'pressed:bg-red-900',
};

const success: ButtonVariantToken = {
  text: 'text-white',
  bg: 'bg-green-700',
  hover: 'hover:bg-green-800',
  pressed: 'pressed:bg-green-900',
};

const icon: ButtonVariantToken = {
  text: 'text-gray-600',
  hover: 'hover:bg-black/[5%]',
  pressed: 'pressed:bg-black/10',
};

const primaryGhost: ButtonVariantToken = {
  text: 'text-blue-600',
  bg: 'bg-transparent',
  hover: 'hover:bg-blue-50',
  pressed: 'pressed:bg-blue-100',
};

const secondaryGhost: ButtonVariantToken = {
  text: 'text-gray-800',
  bg: 'bg-transparent',
  hover: 'hover:bg-gray-100',
  pressed: 'pressed:bg-gray-200',
};

const destructiveGhost: ButtonVariantToken = {
  text: 'text-red-700',
  bg: 'bg-transparent',
  hover: 'hover:bg-red-50',
  pressed: 'pressed:bg-red-100',
};

const successGhost: ButtonVariantToken = {
  text: 'text-green-700',
  bg: 'bg-transparent',
  hover: 'hover:bg-green-50',
  pressed: 'pressed:bg-green-100',
};

const iconGhost: ButtonVariantToken = {
  text: 'text-gray-600',
  hover: 'hover:bg-black/[5%]',
  pressed: 'pressed:bg-black/10',
};

const baseButtonStyles = tv({
  extend: controlCommonStyles,
  base: 'px-5 h-12 flex items-center justify-center font-display text-sm text-center rounded-md',
  variants: {
    variant: {
      primary: twMerge(Object.values(primary)),
      secondary: twMerge(Object.values(secondary)),
      destructive: twMerge(Object.values(destructive)),
      success: twMerge(Object.values(success)),
      icon: twMerge(Object.values(icon)),
    },
    ghost: {
      true: '',
      false: '',
    },
    fullWidth: {
      true: 'w-full justify-center',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      ghost: true,
      class: twMerge(Object.values(primaryGhost)),
    },
    {
      variant: 'secondary',
      ghost: true,
      class: twMerge(Object.values(secondaryGhost)),
    },
    {
      variant: 'destructive',
      ghost: true,
      class: twMerge(Object.values(destructiveGhost)),
    },
    {
      variant: 'success',
      ghost: true,
      class: twMerge(Object.values(successGhost)),
    },
    {
      variant: 'icon',
      ghost: true,
      class: twMerge(Object.values(iconGhost)),
    },
  ],
  defaultVariants: {
    variant: 'primary',
    ghost: false,
  },
});

export const buttonStyles = (payload: unknown): string =>
  baseButtonStyles(payload as Record<string, unknown>);
