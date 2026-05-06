import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReferencePage from '@/app/(content)/_components/ReferencePage/ReferencePage';
import { getAllDirIds, getDir } from '@/app/lib/directoryFunctions';
import { mainDir } from '@/app/lib/directories/mainDir';

export function generateStaticParams() {
  return getAllDirIds(mainDir).map((item) => item.params);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pageDirIndex = getDir(id);
  const page = mainDir.pageDir[pageDirIndex];

  return {
    title: page ? page.title : 'Front End Basics',
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pageDirIndex = getDir(id);
  const page = mainDir.pageDir[pageDirIndex];

  if (!page || page.id !== id) {
    notFound();
  }

  return <ReferencePage pageDirIndex={pageDirIndex} />;
}
