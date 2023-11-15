import { XMLParser } from 'fast-xml-parser';
import { XmlSvgFile } from '../types';

export const parseOptionsRead = {
    attributeNamePrefix: "",
    attributesGroupName: "_attributes",
    ignoreAttributes: false,
    allowBooleanAttributes: true,
};

export function xml2Js(cnt: string) {
    const parser = new XMLParser(parseOptionsRead);
    const obj = parser.parse(cnt); //console.log('%craw', 'color: green', JSON.stringify(obj, null, 4));
    return obj as XmlSvgFile;
}

// XML beautifier similar to https://gist.github.com/sente/1083506

export function formatXml(xml: string, tab = '  ') { // tab = optional indent value, default is tab (\t)
    tab = tab || '\t';

    let formatted = '';
    let indent = '';

    xml.split(/>\s*</).forEach(
        (node) => {
            if (node.match(/^\/\w/)) {
                indent = indent.substring(tab.length); // decrease indent by one 'tab'
            }

            formatted += `${indent}<${node}>\r\n`;

            if (node.match(/^<?\w[^>]*[^\/]$/)) {
                indent += tab;              // increase indent
            }
        }
    );

    return formatted.substring(1, formatted.length - 3);
}

// Addition beautifications

function removeEmptyFields(svgFontStr: string) {
    return svgFontStr.replace(/(glyph-name="" )/g, ''); // remove empty fields
}

export function formatSvgfontText(xml: string) {
    return removeEmptyFields(formatXml(xml));
}
