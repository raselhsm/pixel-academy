import { createContext, useContext } from 'react';

// Lets any section (hero, curriculum) open the free-class video dialog.
export const FreePreviewContext = createContext(() => {});

export const useOpenFreePreview = () => useContext(FreePreviewContext);
