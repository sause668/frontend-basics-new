import { Box, Container } from '@mui/material';
import TableContent from '@/app/(content)/_components/ReferencePage/table-comps/TableContent';
import type { ReferencePageInfo } from '@/app/lib/definitions';

export default function PageContent({ page }: { page: ReferencePageInfo }) {
  return (
    <Box
      sx={{
        position: 'relative',
        pb: '100px',
        height: '100%',
        overflowX: 'scroll',
        backgroundColor: 'white',
      }}
    >
      <Container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {page.TableDir.map((table) => (
          <TableContent table={table} pageId={page.id} key={`${page.id}${table.id}`} />
        ))}
      </Container>
    </Box>
  );
}
