import { proxy, subscribe } from "valtio";
import { GlyphAttributes } from "./types";
import * as tests from './test-fonts';

// Source text for the font

export type FontDataSource = {
    text: string;
};

export const fontDataSource = proxy<FontDataSource>({
    text: tests.defaultFontDataStr,
});

// Font data

type MatchUriData = {
    mime: string;   // 'application/octet-stream' | 'image/png' | 'application/font-woff2'
    enc?: string;   // charset=utf-8
    base: string;   // base64
    data: string;
};

export type FontData = {
    fontText: string;

    dataUri?: MatchUriData | undefined | null;
    xmlText: string;
    glyphs: GlyphAttributes[];
};

export const fontData = proxy<FontData>({
    fontText: '',
    xmlText: '',
    glyphs: [],
});

// Source text for the font parsing

const reDataUri = /^data:(?<mime>[\w\/\+-]*);?(?<enc>(?:charset=[\w-]+)?);?(?<base>base64?),(?<data>[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%]*)\s*/gi;

function checkDataUri(text: string) {
    //TODO: add url protocol processing
    fontData.dataUri = reDataUri.exec(text)?.groups as MatchUriData;
}

subscribe(fontDataSource, () => {
    fontData.fontText = fontDataSource.text;

    checkDataUri(fontDataSource.text);
});
