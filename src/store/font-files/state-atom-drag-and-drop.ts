import { atom } from "jotai";
import { convertDroppedFilesToSvgFont } from "./state-convert-to-svg-font";

export type DoDroppedFilesAtom = typeof doDroppedFilesAtom;
export const doDroppedFilesAtom = atom(null, async (get, set, files: FileList) => convertDroppedFilesToSvgFont(files));
