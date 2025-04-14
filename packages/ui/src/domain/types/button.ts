import type { AriaButtonOptions } from '@react-aria/button';
import type { MotionProps } from 'framer-motion';

import type { ChildrenType, CommonProps } from './index';

/**
 * Represents a token configuration for a button variant, defining styles for various states and themes.
 *
 * Properties:
 * - bg: Specifies the background color for the button in the default setup.
 * - darkBg: Specifies the background color for the button in a dark setup.
 * - darkHover: Defines the hover state background color for the button in a dark setup.
 * - darkPressed: Defines the pressed state background color for the button in a dark setup.
 * - darkText: Specifies the text color for the button in a dark setup.
 * - hover: Defines the hover state background color for the button in the default setup.
 * - pressed: Defines the pressed state background color for the button in the default setup.
 * - text: Specifies the text color for the button in the default setup.
 */
export interface ButtonVariantToken {
  bg?: string;
  darkBg?: string;
  darkHover?: string;
  darkPressed?: string;
  darkText?: string;
  hover: string;
  pressed: string;
  text: string;
}

/**
 * Represents the design tokens for various button variants.
 *
 * This interface defines a set of button appearance properties like colors, borders, and backgrounds
 * for different button styles commonly used in user interfaces. It provides a typed structure to improve
 * consistency and ensure correct usage of button variants across an application.
 *
 * Properties:
 * - `primary`: A ButtonVariantToken representing the styling for the primary button variant.
 * - `secondary`: A ButtonVariantToken representing the styling for the secondary button variant.
 * - `destructive`: A ButtonVariantToken representing the styling for the destructive button variant.
 * - `success`: A ButtonVariantToken representing the styling for the success button variant.
 * - `icon`: A modified ButtonVariantToken used for icon-only buttons, excluding the `bg` property.
 *
 * Typically utilized in design systems or theming solutions to align button appearances consistently.
 */
export interface ButtonVariantsMap {
  primary: ButtonVariantToken;
  secondary: ButtonVariantToken;
  destructive: ButtonVariantToken;
  success: ButtonVariantToken;
  icon: Omit<ButtonVariantToken, 'bg'>;
}

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'success'
  | 'icon';
/**
 * Defines the properties for a Button component.
 *
 * Combines properties from `MotionProps`, `AriaButtonOptions<'button'>`, and `CommonProps`.
 *
 * Additional properties:
 * - `variant`: Specifies the button's style. Can be `'primary'`, `'secondary'`, `'destructive'`, `'success'`, or `'icon'`. Optional.
 * - `children`: Defines the content to be displayed inside the button. Optional.
 */
export type ButtonProps = MotionProps &
  AriaButtonOptions<'button'> &
  CommonProps & {
    variant?: ButtonVariants;
    ghost?: boolean;
  } & {
    children?: ChildrenType;
  };
