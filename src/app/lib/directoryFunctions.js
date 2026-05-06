export function getAllDirIds(mainDir) {
    
    return mainDir.pageDir.map((page) => {
      return {
        params: {
          id: page.id,
        },
      };
    });
}

export function getDir(id) {
    switch (id) {
        case 'html':
            return 0;
            break;

        case 'css':
            return 1;
            break;

        case 'javaScript':
            return 2;
            break;

        case 'htmlDom':
            return 3;
            break;

        case 'advJavaScript':
            return 4;
            break;
                                   
        default:
            return 0;
            break;
    }
}