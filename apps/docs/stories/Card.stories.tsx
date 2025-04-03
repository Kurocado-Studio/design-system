import { Button, Card, type CardProps } from '@kurocado-studio/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

function Template(args: CardProps): React.ReactElement {
  return <Card {...args} />;
}

const meta: Meta<CardProps> = {
  component: Template,
  argTypes: {
    children: {
      description: 'Is the Input disabled?',
    },
    className: {
      control: 'text',
      description: 'Optional Tailwind CSS class for styling',
    },
  },
  tags: ['autodocs'],
};

export const WithCardBody: StoryObj<CardProps> = {
  render: Template,
  name: 'With Card Body',
  args: {
    children: (
      <Card.Body>
        <p className='text-sm'>Card body</p>
      </Card.Body>
    ),
  },
  tags: ['autodocs'],
};

export const WithFramerMotionProps: StoryObj<CardProps> = {
  render: Template,
  name: 'With Framer Motion Props',
  args: {
    children: (
      <Card.Body>
        <p className='text-sm'>Card body</p>
      </Card.Body>
    ),
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
  tags: ['autodocs'],
};

export const WithCardHeader: StoryObj<CardProps> = {
  render: Template,
  name: 'With Card Header',
  args: {
    children: (
      <>
        <Card.Header>
          <h1 className='text-9xl'>Card header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-sm'>Card body</p>
        </Card.Body>
      </>
    ),
  },
  tags: ['autodocs'],
};

export const WithCardFooter: StoryObj<CardProps> = {
  render: Template,
  name: 'With Card Footer',
  args: {
    children: (
      <>
        <Card.Header>
          <h1 className='text-9xl'>Card header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-sm'>Card body</p>
        </Card.Body>
        <Card.Footer>
          <Button variant='success'>Button</Button>
        </Card.Footer>
      </>
    ),
  },
  tags: ['autodocs'],
};

/* eslint import/no-default-export: 0 */
export default meta;
