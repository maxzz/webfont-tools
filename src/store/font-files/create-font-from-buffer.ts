import { Font, FontEditor, woff2 } from 'fonteditor-core';
import { base64ToArrayBuffer } from '@/utils';

type CreateFontFromBufferOptions = {
    srcType: FontEditor.FontType;
};

export async function createFontFromBuffer(buffer: ArrayBuffer, { srcType }: CreateFontFromBufferOptions): Promise<FontEditor.Font> {
    await woff2.init('./woff2.wasm');
    
    const font = Font.create(buffer, {  // read font data, support ArrayBuffer | Buffer | string
        type: srcType,                  // support ttf, woff, woff2, eot, otf, svg
        //subset: [65, 66],           // only read `a`, `b` glyphs
        hinting: true,                  // save font hinting
        compound2simple: true,          // transform ttf compound glyph to simple
        inflate: undefined,             // inflate function for woff
        combinePath: false,             // for svg path
    });

    return font;
}

export async function fontWoff2FileToSvgFont(buffer: ArrayBuffer): Promise<string> {
    const font = await createFontFromBuffer(buffer, { srcType: 'woff2' });

    console.log('font', font);

    const newBuffer = font.write({ type: 'svg' });
    const newStr = newBuffer.toString();

    return newStr;
}
/**
 * Create SVG font from base64 string
 * @param base64 It can be with or without data uri 'data:application/font-woff2;base64,' protocol 
 * @returns Promise with SVG font as string
 */
export async function fontBase64ToSvgFont(base64: string): Promise<string> {
    const array = base64ToArrayBuffer(base64);
    return fontWoff2FileToSvgFont(array);
}
