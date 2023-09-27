import { atom } from "jotai";

export type DoDroppedFilesAtom = typeof doDroppedFilesAtom;
export const doDroppedFilesAtom = atom(
    null,
    async (get, set, files: FileList) => {
        if (!files.length) { return; }
        
        try {
            console.log('dropped', files);

            // const blob = await loadFileData(files[0]);
            // const img: HTMLImageElement = await createImageFromBlob(blob);
            // set(orgImgAtom, img);
        } catch (error) {
            // set(orgImgAtom, null);
            // toastWarning((error as Error)?.message || 'Failed to load image');
        }
    }
);
