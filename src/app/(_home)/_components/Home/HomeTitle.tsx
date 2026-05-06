import { Typography, Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

type HomeTitleProps = {
  title: string;
  dis: string;
};

export default function HomeTitle({ title, dis }: HomeTitleProps) {
  return (
    <div style={{ backgroundColor: '#2962ff' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '20px',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h1" color="white" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" color="white" align="center">
              {dis}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
