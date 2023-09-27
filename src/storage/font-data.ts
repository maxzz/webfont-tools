import { proxy } from "valtio";

export type FontData = {
    fontText: string;
    xmlText: string;
};

import * as tests from './test-fonts';

export const fontData = proxy<FontData>({
    fontText: tests.defaultFontDataBase642,
    xmlText: '',
});
