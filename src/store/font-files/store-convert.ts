import { fontData } from "../font-data";
import { base64ToSvgFont, xml2Js } from ".";
import { toastWarning } from "@/components/ui";

export async function convertToSvg(fontText: string) {
    try {
        if (!fontText) {
            return;
        }
    
        const xml = await base64ToSvgFont(fontText);
        fontData.xmlText = xml;

        const obj = xml2Js(fontData.xmlText);
        const glyphs = obj.svg.defs.font.glyph.map((item) => item._attributes);

        fontData.glyphs = glyphs;
    } catch (error) {
        const msg = error instanceof Error ? error.message : error!.toString();
        toastWarning(`Failed to convert font:\n${msg}`);

        fontData.xmlText = '';
        fontData.glyphs = [];
    }
}
