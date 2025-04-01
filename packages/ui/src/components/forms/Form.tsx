import { HtmlForm, type HtmlFormProps } from '@kurocado-studio/html-forms';
import { motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HtmlFormBaseProps extends HtmlFormProps {
  defaultValue?: React.HTMLAttributes<HTMLFormElement>;
  className?: string;
}

const HtmlFormBase = React.forwardRef<HTMLFormElement, HtmlFormElementProps>(
  (props, ref) => {
    // @ts-ignore ref error
    return <HtmlForm ref={ref} {...props} />;
  },
);

HtmlFormBase.displayName = 'HtmlForm';

export type HtmlFormElementProps =
  React.PropsWithChildren<HtmlFormBaseProps> & {
    ref: React.Ref<HTMLFormElement>;
  };

export function Form(props: HtmlFormElementProps): React.ReactElement {
  const HtmlFormElement = motion.create(HtmlFormBase);
  return (
    <HtmlFormElement {...props} className={twMerge('flex', props.className)} />
  );
}
