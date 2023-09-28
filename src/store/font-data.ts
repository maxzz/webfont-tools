import { proxy } from "valtio";

export type FontData = {
    fontText: string;
    xmlText: string;
    glyphs: GlyphAttributes[];
};

import * as tests from './test-fonts';
import { GlyphAttributes } from "./types";

export const fontData = proxy<FontData>({
    fontText: tests.defaultFontDataBase642,
    xmlText: '',
    glyphs: [],
});
