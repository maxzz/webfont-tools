import { atom } from "jotai";
import { fontWoff2FileToSvgFont } from "./create-font-from-buffer";
import { fileExt, loadFileData } from "@/utils";
import { toastWarning } from "@/components/ui";
import { getGlyphsFromSvgFont } from "./state-convert-to-svg-font";
import { fontData } from "../state-font-data";
import { formatXml, removeEmptyFields } from "./xml-parse";

export type DoDroppedFilesAtom = typeof doDroppedFilesAtom;
export const doDroppedFilesAtom = atom(
    null,
    async (get, set, files: FileList) => {
        try {
            if (files.length !== 1) {
                throw new Error('Only one file can be dropped');
            }

            const ext = fileExt(files[0].name);
            if (ext !== 'woff2') {
                throw new Error(`Dropped file "${files[0].name}".\nOnly .woff2 files are supported`);
            }

            const blob = await loadFileData(files[0], { returnArrayBuffer: true }) as ArrayBuffer;

            // 1. get xml
            const xml = await fontWoff2FileToSvgFont(blob);
            fontData.xmlText = removeEmptyFields(formatXml(xml));

            // 2. set glyphs
            fontData.glyphs = getGlyphsFromSvgFont(fontData.xmlText);

            console.log('fontData.xmlText', fontData.xmlText);
        } catch (error) {
            fontData.xmlText = '';
            fontData.glyphs = [];
            toastWarning((error as Error)?.message || 'Failed to load image');
        }
    }
);
