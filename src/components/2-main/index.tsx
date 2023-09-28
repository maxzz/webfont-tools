import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { InputArea, Button } from './controls';

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <InputArea className="h-64 text-xs" store={fontDataSource} name="text" label="WOFF2 font data" spellCheck="false" />

            <InputArea className="h-64 text-xs" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

            <ShowGlyphs />

            <Button className="self-end" onClick={() => convertToSvg(fontDataSource.text)}>
                Convert
            </Button>
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <ConvertForm />
        </div>
    );
}
