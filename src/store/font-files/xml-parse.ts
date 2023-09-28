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
