import React from 'react';
import CellText from '@/app/(content)/_components/ReferencePage/table-comps/CellText';
import CellList from '@/app/(content)/_components/ReferencePage/table-comps/CellList';
import CellCode from '@/app/(content)/_components/ReferencePage/table-comps/CellCode';
import CellTable from '@/app/(content)/_components/ReferencePage/table-comps/CellTable';
import type { ReferenceCell } from '@/app/lib/definitions';

type CellContentProps = {
  cell: ReferenceCell;
  rowId?: string;
};

export default function CellContent({ cell, rowId }: CellContentProps) {
  return (
    <React.Fragment>
      {'text' in cell ? (
        <CellText cell={cell} />
      ) : 'list' in cell ? (
        <CellList cell={cell} rowId={rowId} />
      ) : 'code' in cell ? (
        <CellCode cell={cell} />
      ) : 'table' in cell ? (
        <CellTable cell={cell} rowId={rowId} />
      ) : null}
    </React.Fragment>
  );
}
