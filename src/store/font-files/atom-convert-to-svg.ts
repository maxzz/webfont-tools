import { fontData } from "../font-data";
import { base64ToSvgFont, xml2Js } from ".";
import { toastWarning } from "@/components/ui";

function formatXml(xml: string, tab = '  ') { // tab = optional indent value, default is tab (\t)
    var formatted = '', indent= '';
    tab = tab || '\t';
    xml.split(/>\s*</).forEach(function(node) {
        if (node.match( /^\/\w/ )) indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted += indent + '<' + node + '>\r\n';
        if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;              // increase indent
    });
    return formatted.substring(1, formatted.length-3);
}

export async function convertToSvg() {
    try {
        let fontText = fontData.fontText;

        if (fontData.dataUri) {
            fontText = fontData.dataUri.data;
        }

        if (!fontText) {
            toastWarning('No font data');
            return;
        }
    
        const xml = await base64ToSvgFont(fontText);
        fontData.xmlText = formatXml(xml);

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
