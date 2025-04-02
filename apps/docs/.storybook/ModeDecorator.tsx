import { Button } from '@kurocado-studio/ui';
import React, { type FC, type ReactElement, useState } from 'react';

export function ModeDecorator(Story: FC): ReactElement {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = (): void => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <>
      <Button
        onPress={toggleMode}
        variant='secondary'
        style={{
          position: 'fixed',
          top: 5,
          right: 5,
          zIndex: 9999,
        }}
      >
        {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </Button>
      <Story />
    </>
  );
}
