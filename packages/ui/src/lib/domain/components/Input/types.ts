import { type CommonHTMLElementProps } from '../common';

export type InputProps = CommonHTMLElementProps<HTMLInputElement, 'input'> & {
  type?: string;
};
