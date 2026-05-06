import { ButtonBase, Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Link from 'next/link';
import type { ReferencePageInfo } from '@/app/lib/definitions';

export default function HomeContentBlock({ page }: { page: ReferencePageInfo }) {
  return (
    <Grid item xs={10} sm={8} md={7} lg={7} sx={{}}>
      <ButtonBase
        LinkComponent={Link}
        href={`/${page.id}`}
        sx={{
          display: 'block',
          backgroundColor: '#2979ff',
          borderRadius: '10px',
          width: '100%',
          height: '100px',
        }}
      >
        <Typography variant="h4" color="white" align="center">
          {page.title}
        </Typography>

        <Typography variant="h6" color="white" align="center">
          {page.dis}
        </Typography>
      </ButtonBase>
    </Grid>
  );
}
