'use client';

import { useMediaQuery } from '@mui/material';
import { mainDir } from '@/app/lib/directories/mainDir';
import Nav from '@/app/(content)/_components/ReferencePage/Nav';
import PageNav from '@/app/(content)/_components/ReferencePage/PageNav';
import PageContent from '@/app/(content)/_components/ReferencePage/PageContent';

export default function ReferencePage({ pageDirIndex }: { pageDirIndex: number }) {
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
