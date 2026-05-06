import type { MainDirectory } from '@/app/lib/definitions';

export function getAllDirIds(mainDir: MainDirectory) {
  return mainDir.pageDir.map((page) => ({
    params: {
      id: page.id,
    },
  }));
}

export function getDir(id: string): number {
  switch (id) {
    case 'html':
      return 0;
    case 'css':
      return 1;
    case 'javaScript':
      return 2;
    case 'htmlDom':
      return 3;
    case 'advJavaScript':
      return 4;
    default:
      return 0;
  }
}
