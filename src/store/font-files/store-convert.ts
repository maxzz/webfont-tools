import { fontData } from "../font-data";
import { base64ToSvgFont, xml2Js } from ".";
import { toastWarning } from "@/components/ui";

export async function convert(fontText: string) {
    if (!fontText) {
        return;
    }
    try {
        const res = await base64ToSvgFont(fontText);
        fontData.xmlText = res;

        const obj = xml2Js(fontData.xmlText);
        const glyphs = obj.svg.defs.font.glyph.map((item) => item._attributes);
        fontData.glyphs = glyphs;

        //console.log(glyphs);

    } catch (error) {
        const msg = error instanceof Error ? error.message : error!.toString();
        toastWarning(`Failed to convert font:\n${msg}`);
        fontData.xmlText = '';
        fontData.glyphs = [];
    }
}
