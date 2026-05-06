'use client';

import { useMediaQuery } from '@mui/material';
import { mainDir } from '@/app/lib/directories/mainDir';
import Nav from './Nav';
import PageNav from './PageNav';
import PageContent from './PageContent';

export default function ReferencePage({ pageDirIndex }) {
  const mobile = useMediaQuery('(min-width:1000px)');

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        display: 'flex',
      }}
    >
      <Nav mobile={mobile} mainDir={mainDir} pageDirIndex={pageDirIndex} />
      <PageNav mobile={mobile} page={mainDir.pageDir[pageDirIndex]} />
      <PageContent page={mainDir.pageDir[pageDirIndex]} />
    </div>
  );
}
