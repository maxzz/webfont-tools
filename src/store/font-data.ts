import { proxy, subscribe } from "valtio";
import { GlyphAttributes } from "./types";
import * as tests from './test-fonts';

export type FontDataSource = {
    text: string;
};

export const fontDataSource = proxy<FontDataSource>({
    text: tests.defaultFontDataBase642,
});

//

export type FontData = {
    fontText: string;
    xmlText: string;
    glyphs: GlyphAttributes[];
};

export const fontData = proxy<FontData>({
    fontText: tests.defaultFontDataBase642,
    xmlText: '',
    glyphs: [],
});

//

subscribe(fontDataSource, () => {
    console.log('fontDataSource changed');
    fontData.fontText = fontDataSource.text;
});

export function setFontText(text: string) {
    const re = /^\s*data:(?<media_type>(?<mime_type>[a-z\-]+\/[a-z\-\+]+)(?<params>(;[a-z\-]+\=[a-z\-]+)*))?(?<encoding>;base64)?,(?<data>[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*)$/gi;
}