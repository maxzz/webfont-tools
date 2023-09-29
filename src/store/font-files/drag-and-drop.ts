import { atom } from "jotai";
import { loadFileData } from "@/utils";

export type DoDroppedFilesAtom = typeof doDroppedFilesAtom;
export const doDroppedFilesAtom = atom(
    null,
    async (get, set, files: FileList) => {
        if (!files.length) { return; }
        
        try {
            const blob = await loadFileData(files[0], { asArrayBuffer: false });
            console.log('blob', blob);
            // const img: HTMLImageElement = await createImageFromBlob(blob);
            // set(orgImgAtom, img);
        } catch (error) {
            // set(orgImgAtom, null);
            // toastWarning((error as Error)?.message || 'Failed to load image');
        }
    }
);
