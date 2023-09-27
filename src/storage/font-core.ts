import { Font, woff2 } from 'fonteditor-core';

function base64ToArrayBuffer(base64: string) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export async function getFont(base64: string) {
    //debugger;

    const array = base64ToArrayBuffer(base64);

    await woff2.init('./woff2.wasm');

    // read font data, support ArrayBuffer | Buffer | string
    const font = Font.create(array.buffer, {
        // support ttf, woff, woff2, eot, otf, svg
        type: 'woff2',
        // only read `a`, `b` glyphs
        subset: [65, 66],
        // save font hinting
        hinting: true,
        // transform ttf compound glyph to simple
        compound2simple: true,
        // inflate function for woff
        inflate: undefined,
        // for svg path
        combinePath: false,
    });
    
    console.log('font', font);
}
