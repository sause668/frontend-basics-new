import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import type { CodeCell } from '@/app/lib/definitions';

export default function CellCode({ cell }: { cell: CodeCell }) {
  return (
    <Typography
      variant="body2"
      paragraph
      sx={{
        lineHeight: 1.3,
        backgroundColor: blue.A400,
        color: 'white',
        fontSize: 15,
        width: '100%',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        my: 0,
        py: 0,
        pl: cell.indent * 2,
        fontFamily: 'monospace',
      }}
    >
      {cell.code}
    </Typography>
  );
}
