import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import type { NestedTableCell } from '@/app/lib/definitions';

type CellTableProps = {
  cell: NestedTableCell;
  rowId?: string;
};

export default function CellTable({ cell, rowId }: CellTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {cell.table.head.map((headCell, index) => (
              <TableCell sx={{ fontWeight: 700 }} key={`${rowId ?? 'table'}${index}head`}>
                {headCell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cell.table.body.map((bodyRow, rowIndex) => (
            <TableRow
              key={`${rowId ?? 'table'}${rowIndex}row`}
              sx={{
                '&:nth-of-type(odd)': {
                  backgroundColor: blue[50],
                },
              }}
            >
              {bodyRow.map((bodyCell, cellIndex) => (
                <TableCell
                  key={`${rowId ?? 'table'}${rowIndex}${cellIndex}cell`}
                  sx={{
                    color: cellIndex === 0 ? blue.A700 : undefined,
                    p: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  {bodyCell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
