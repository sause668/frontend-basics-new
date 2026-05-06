import { Typography } from '@mui/material';
import type { TextCell } from '@/app/lib/definitions';

export default function CellText({ cell }: { cell: TextCell }) {
  return (
    <Typography
      variant="body1"
      paragraph
      color="black"
      sx={{
        lineHeight: 2,
        pb: 1.5,
        mb: 0,
        width: '100%',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      {cell.text}
    </Typography>
  );
}
