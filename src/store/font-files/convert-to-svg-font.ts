import { GlyphAttributes } from "../types";
import { fontData } from "./state-font-data";
import { fontBase64ToSvgFont, fontWoff2FileToSvgFont } from "./create-font";
import { formatSvgfontText, xml2Js } from "./xml-parse";
import { toastWarning } from "@/components/ui";
import { fileExt, loadFileData } from "@/utils";
import { FontEditor } from "fonteditor-core";
import { ref } from "valtio";

/**
 * Get glyphs from xml
 * @param svgText svg font as string 
 * @returns array of glyphs
 */
export function getGlyphsFromSvgFont(svgText: string): GlyphAttributes[] {
    const obj = xml2Js(svgText);

    let glyphsRaw = obj?.svg?.defs?.font?.glyph;
    if (!glyphsRaw) {
        throw new Error('No glyphs found');
    }

    if (!Array.isArray(glyphsRaw)) {
        glyphsRaw = [glyphsRaw];
    }

    const glyphs = glyphsRaw.map((item) => item._attributes);

    return glyphs;
}


function setFontAndAttrs(font: FontEditor.Font) {
    fontData.font = ref(font);
    //.get().head.unitsPerEm
}

export async function convertTextToSvgFont() {
    try {
        let fontText = fontData.dataUri ? fontData.dataUri.data : fontData.fontText;
        if (!fontText) {
            throw new Error('No font data');
        }

        // 1. get xml
        const { svgText, font } = await fontBase64ToSvgFont(fontText);
        setFontAndAttrs(font);
        fontData.xmlText = formatSvgfontText(svgText);

        // 2. set glyphs
        fontData.glyphs = getGlyphsFromSvgFont(fontData.xmlText);
    } catch (error) {
        const msg = error instanceof Error ? error.message : error!.toString();
        toastWarning(`Failed to convert font:\n${msg}`);

        fontData.xmlText = '';
        fontData.glyphs = [];
    }
}

export async function convertDroppedFilesToSvgFont(files: FileList): Promise<void>  {
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
        const { svgText, font } = await fontWoff2FileToSvgFont(blob);
        setFontAndAttrs(font);
        fontData.xmlText = formatSvgfontText(svgText);

        // 2. set glyphs
        fontData.glyphs = getGlyphsFromSvgFont(fontData.xmlText);

        console.log('fontData.xmlText', fontData.xmlText);
    } catch (error) {
        toastWarning((error as Error)?.message || 'Failed to load image');

        fontData.xmlText = '';
        fontData.glyphs = [];
    }
}
