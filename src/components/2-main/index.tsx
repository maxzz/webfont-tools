import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { Button, InputArea } from '../ui';

function FontInput() {
    return (
        <div className="">
            <div className="">
                <div className="">
                    WOFF2 font data
                </div>
                <div className="">

                </div>
            </div>

            <InputArea className="h-64 text-xs" store={fontDataSource} name="text" spellCheck="false" />
        </div>
    );
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <FontInput />

            <InputArea className="h-64 text-xs whitespace-pre" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

            <ShowGlyphs />

            <Button className="self-end px-4 py-2" onClick={() => convertToSvg()}>
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
