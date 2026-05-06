import { notFound } from 'next/navigation';
import ReferencePage from '@/app/(content)/_components/ReferencePage/ReferencePage';
import { getAllDirIds, getDir } from '@/app/lib/directoryFunctions';
import { mainDir } from '@/app/lib/directories/mainDir';

export function generateStaticParams() {
  return getAllDirIds(mainDir).map((item) => item.params);
}

export function generateMetadata({ params }) {
  const pageDirIndex = getDir(params.id);
  const page = mainDir.pageDir[pageDirIndex];

  return {
    title: page ? page.title : 'Front End Basics',
  };
}

export default function ContentPage({ params }) {
  const pageDirIndex = getDir(params.id);
  const page = mainDir.pageDir[pageDirIndex];

  if (!page || page.id !== params.id) {
    notFound();
  }

  return <ReferencePage pageDirIndex={pageDirIndex} />;
}
