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

    const formatted: string[] = [];
    let indent = '';

    xml.split(/>\s*</).forEach(
        (node) => {
            if (node.match(/^\/\w/)) {
                indent = indent.substring(tab.length); // decrease indent by one 'tab'
            }

            formatted.push(`${indent}<${node}>`); // this will create sorrounding <> that will be removed later

            if (node.match(/^<?\w[^>]*[^\/]$/)) {
                indent += tab; // increase indent
            }
        }
    );

    const newLines = formatted.join('\r\n');
    return newLines.substring(1, newLines.length - 1); // remove sorrounding <> that were added above
}

// Addition beautifications

function removeEmptyFields(svgFontStr: string) {
    return svgFontStr.replace(/(glyph-name="" )/g, ''); // remove empty fields
}

export function formatSvgfontText(xml: string) {
    return removeEmptyFields(formatXml(xml));
}
