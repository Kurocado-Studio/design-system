import { Card, Grid, Input } from '@kurocado-studio/ui/react';
import React from 'react';

export function Daily001(): React.ReactNode {
  return (
    <main className='grid place-items-center h-screen w-screen'>
      <Grid
        columns={{ sm: '1', md: '2' }}
        gap='2'
        justify='center'
        className='max-w-7xl'
      >
        <h1 className='text-4xl'>Welcome Back</h1>
        <Card className='w-full min-w-[400px]'>
          <Card.Body>
            <h2>Login</h2>
            <Input type='email' placeholder='e-mail@example.com' />
            <Input type='password' placeholder='Password' />
          </Card.Body>
        </Card>
      </Grid>
    </main>
  );
}
