import type { ReactNode } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

export default function HomeContent({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: '#2962ff' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginY: '20px',
          }}
        >
          {children}
        </Grid>
      </Container>
    </div>
  );
}
