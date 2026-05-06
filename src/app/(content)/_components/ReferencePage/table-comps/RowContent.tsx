'use client';

import { Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useMediaQuery } from '@mui/material';
import CellContent from '@/app/(content)/_components/ReferencePage/table-comps/CellContent';
import type { ReferenceRow } from '@/app/lib/definitions';

export default function RowContent({ row }: { row: ReferenceRow }) {
  const desktopLayout = useMediaQuery('(min-width:900px)');

  return (
    <Grid container spacing={2} id={row.id} sx={{ pt: 8, pb: 0 }}>
      {'headCellDir' in row ? (
        <>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" align="center" color="primary">
              {row.title}
            </Typography>
          </Grid>
          {row.headCellDir.length === 0 ? null : (
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {row.headCellDir.map((cell, index) => (
                <CellContent cell={cell} rowId={row.id} key={`${row.id}${index}headCell`} />
              ))}
            </Grid>
          )}
        </>
      ) : (
        <>
          <Grid
            item
            xs={6}
            sm={6}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
            }}
          >
            <Typography
              variant="h6"
              align={!desktopLayout ? 'left' : 'right'}
              color="primary"
              sx={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '100%' }}
            >
              {row.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            {row.cellDir.map((cell, index) => (
              <CellContent cell={cell} rowId={row.id} key={`${row.id}${index}cell`} />
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}
