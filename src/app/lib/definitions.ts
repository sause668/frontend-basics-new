import type { ReactNode } from 'react';

/** Discriminated cell shapes used in reference tables */
export type TextCell = { text: ReactNode };
export type ListCell = { list: ReactNode[] };
export type CodeCell = { code: ReactNode; indent: number };
export type NestedTableCell = {
  table: {
    head: string[];
    body: ReactNode[][];
  };
};

export type ReferenceCell = TextCell | ListCell | CodeCell | NestedTableCell;

export type HeaderSectionRow = {
  id: string;
  title: ReactNode;
  headCellDir: ReferenceCell[];
};

export type ContentRow = {
  id: string;
  title: ReactNode;
  cellDir: ReferenceCell[];
};

export type ReferenceRow = HeaderSectionRow | ContentRow;

export interface ReferenceTable {
  id: string;
  title: string;
  titleDir: ReferenceCell[];
  RowDir: ReferenceRow[];
}

export interface ReferencePageInfo {
  id: string;
  title: string;
  dis: string;
  TableDir: ReferenceTable[];
}

export interface MainDirectory {
  id?: string;
  title?: string;
  pageDir: ReferencePageInfo[];
}
