import { MenuList } from '@mui/material';
import NavDir from '@/app/(content)/_components/ReferencePage/NavDir';
import type { ReferencePageInfo } from '@/app/lib/definitions';

type PageNavProps = {
  mobile: boolean;
  page: ReferencePageInfo;
};

export default function PageNav({ mobile, page }: PageNavProps) {
  return (
    <>
      {!mobile ? null : (
        <MenuList
          sx={{
            minWidth: '250px',
            maxWidth: '251px',
            bgcolor: 'secondary.main',
            zIndex: '99',
            pt: 9,
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
          <NavDir page={page} />
        </MenuList>
      )}
    </>
  );
}
