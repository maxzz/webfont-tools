import { GlyphAttributes } from "../types";
import { fontData } from "../state-font-data";
import { fontBase64ToSvgFont } from "./create-font-from-buffer";
import { formatSvgfontText, xml2Js } from "./xml-parse";
import { toastWarning } from "@/components/ui";

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

export async function convertTextToSvgFont() {
    try {
        let fontText = fontData.dataUri ? fontData.dataUri.data : fontData.fontText;
        if (!fontText) {
            toastWarning('No font data');
            return;
        }

        // 1. get xml
        const { svgText, font } = await fontBase64ToSvgFont(fontText);
        fontData.font = font;
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
