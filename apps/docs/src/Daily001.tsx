import { Card, Grid, Input, Typography } from '@kurocado-studio/ui/react';
import React from 'react';

export function Daily001(): React.ReactNode {
  return (
    <main className='grid place-items-center h-screen w-screen'>
      <Grid
        columns={{ sm: '1', md: '2' }}
        gap='2'
        justify='center'
        className='max-w-7xl min-w-full'
      >
        <Typography size='6xl'>Welcome Back</Typography>
        <Card className='min-w-[400px] max-w-[400px]'>
          <Card.Body>
            <Typography size='2xl'>Login</Typography>
            <Input type='email' placeholder='e-mail@example.com' />
            <Input type='password' placeholder='Password' />
          </Card.Body>
        </Card>
      </Grid>
    </main>
  );
}
