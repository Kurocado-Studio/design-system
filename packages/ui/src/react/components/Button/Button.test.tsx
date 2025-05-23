import { reactTestingLibrary } from '@internal/config';
import React from 'react';

import { Button } from './Button';

const { render, screen } = reactTestingLibrary;

describe('Button', () => {
  it('should render with the provided children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should pass additional props to the button element', () => {
    render(
      <Button id='test-button' data-testid='button-test'>
        Click Me
      </Button>,
    );
    const button = screen.getByTestId('button-test');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'test-button');
  });

  it('should have type="button" by default', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});
