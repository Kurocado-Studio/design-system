import { HtmlForm, type HtmlFormProps } from '@kurocado-studio/html-forms';
import { motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HtmlFormBaseProps extends HtmlFormProps {
  defaultValue?: React.HTMLAttributes<HTMLFormElement>;
  className?: string;
}

const FormBase = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  // @ts-ignore ref error
  return <HtmlForm ref={ref} {...props} />;
});

FormBase.displayName = 'FormBase';

export type FormProps = React.PropsWithChildren<HtmlFormBaseProps>;

export function Form(props: FormProps): React.ReactNode {
  const HtmlFormElement = motion.create(FormBase);
  return (
    <HtmlFormElement {...props} className={twMerge('flex', props.className)} />
  );
}

Form.displayName = 'Form';
