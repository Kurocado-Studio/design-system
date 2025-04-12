// buttonStyles.ts
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { focusRing } from 'src/domain/infra/focusRing';

import { type ButtonVariantToken } from '../types/button';

const primary: ButtonVariantToken = {
  bg: 'bg-[GreenYellow]',
  text: [...['text-gray-800 font-display'], ...[`dark:text-gray-300`]].join(
    ' ',
  ),
  hover: 'hover:bg-[Black] hover:text-[GreenYellow]',
  pressed: 'pressed:text-[GreenYellow]/50',
};

const secondary: ButtonVariantToken = {
  text: [...['text-gray-800 '], ...[`dark:text-gray-300`]].join(),
  bg: 'bg-gray-100',
  hover: 'hover:bg-gray-200',
  pressed: 'pressed:bg-gray-300',
  // Optional dark mode tokens
  darkText: 'dark:text-zinc-100',
  darkBg: 'dark:bg-zinc-600',
  darkHover: 'dark:hover:bg-zinc-500',
  darkPressed: 'dark:pressed:bg-zinc-400',
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
export const buttonStyles = tv({
  extend: focusRing,
  base: 'px-5 py-2 text-sm text-center rounded-lg',
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
    disabled: {
      true: 'bg-gray-200 hover:bg-gray-200 dark:bg-zinc-800 text-gray-500 dark:text-zinc-600 forced-colors:text-[GrayText]',
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
