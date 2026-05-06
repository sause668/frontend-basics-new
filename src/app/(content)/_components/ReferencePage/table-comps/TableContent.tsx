import { Typography } from '@mui/material';
import RowContent from '@/app/(content)/_components/ReferencePage/table-comps/RowContent';
import CellContent from '@/app/(content)/_components/ReferencePage/table-comps/CellContent';
import type { ReferenceTable } from '@/app/lib/definitions';

type TableContentProps = {
  table: ReferenceTable;
  pageId: string;
};

export default function TableContent({ table, pageId }: TableContentProps) {
  return (
    <div key={`${pageId}${table.id}`} id={table.id}>
      <Typography variant="h3" align="left" color="primary" sx={{ pt: 10 }}>
        {table.title}
      </Typography>
      {table.titleDir.map((cell, index) => (
        <CellContent cell={cell} key={`${table.id}${index}titleCell`} />
      ))}
      {table.RowDir.map((row, index) => (
        <RowContent row={row} key={`${table.id}${row.id}${index}`} />
      ))}
    </div>
  );
}
