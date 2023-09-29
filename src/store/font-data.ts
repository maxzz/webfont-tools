import { proxy, subscribe } from "valtio";
import { GlyphAttributes } from "./types";
import * as tests from './test-fonts';

type MatchUriData = {
    mime: string;   // 'application/octet-stream' | 'image/png' | 'application/font-woff2'
    enc?: string;   // charset=utf-8
    base: string;   // base64
    data: string;
};

export type FontDataSource = {
    text: string;
    dataUri?: MatchUriData | undefined | null;
};

export const fontDataSource = proxy<FontDataSource>({
    // text: tests.defaultFontDataStr,
    text: 'data:application/font-woff2;charset=utf-8;base64,1',
});

//

export type FontData = {
    fontText: string;
    xmlText: string;
    glyphs: GlyphAttributes[];
};

export const fontData = proxy<FontData>({
    fontText: '',
    xmlText: '',
    glyphs: [],
});

//

subscribe(fontDataSource, () => {
    console.log('fontDataSource changed');
    
    fontData.fontText = fontDataSource.text;

    checkDataUri(fontDataSource.text);
});

//data:application/octet-stream;base64,
//data:image/png;base64,
//data:application/font-woff2;charset=utf-8;base64, //tested on: https://fontawesome.com/icons/shield?f=classic&s=thin

export function checkDataUri(text: string) {
    //const re = /^\s*data:(?<media_type>(?<mime_type>[a-z\-]+\/[a-z\-\+]+)(?<params>(;[a-z\-]+\=[a-z\-]+)*))?(?<encoding>;base64)?,(?<data>[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*)$/gi;
    //const re = /^\s*data:(?<media>(?<mime>[a-z\-]+\/[a-z\-\+]+)(?<params>(;[a-z\-]+\=[a-z\-]+)*))?(?<encoding>;base64)?,(?<data>.*\s*)$/gi;
    const re = /^data:(?<mime>[\w\/\+-]*);?(?<enc>(?:charset=[\w-]+)?);?(?<base>base64?),(?<data>[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%]*)\s*/gi;
    //OK const re = /data:(?<mime>[\w/\-\.]+);(?<encoding>\w+),(?<data>.*)/gi;
    //const re = /data:(?<data>[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*)$/gi;
    const match = re.exec(text);
    fontDataSource.dataUri = match?.groups as MatchUriData;

    console.log('match', match);
}
