import { fontData } from "../state-font-data";
import { toastWarning } from "@/components/ui";
import { formatXml, xml2Js } from "./xml-parse";
import { fontBase64ToSvgFont } from "./create-font-from-buffer";

export async function convertTextToSvgFont() {
    try {
        let fontText = fontData.dataUri ? fontData.dataUri.data : fontData.fontText;
        if (!fontText) {
            toastWarning('No font data');
            return;
        }

        // 1. set xml
    
        const xml = await fontBase64ToSvgFont(fontText);
        fontData.xmlText = formatXml(xml);

        // 2. set glyphs

        const obj = xml2Js(fontData.xmlText);

        let glyphsRaw = obj?.svg?.defs?.font?.glyph;
        if (!glyphsRaw) {
            throw new Error('No glyphs found');
        }

        if (!Array.isArray(glyphsRaw)) {
            glyphsRaw = [glyphsRaw];
        }

        const glyphs = glyphsRaw.map((item) => item._attributes);

        fontData.glyphs = glyphs;
    } catch (error) {
        const msg = error instanceof Error ? error.message : error!.toString();
        toastWarning(`Failed to convert font:\n${msg}`);

        fontData.xmlText = '';
        fontData.glyphs = [];
    }
}
