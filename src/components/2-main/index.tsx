import { fontData, convertToSvg, fontDataSource } from '@/store';
import { GlyphsGrid } from './03-glyphs-grid';
import { InputArea } from '../ui';
import { FontInputTitleBar } from './01-top-menu/top-title-menu';
import { Button } from '../ui/shadcn';
import { DialogDemo } from './04-svg-font-preview/font-svg-view';

function FontInput() {
    return (
        <div className="">
            <FontInputTitleBar />
            <InputArea className="h-64 text-xs" store={fontDataSource} name="text" spellCheck="false" />
        </div>
    );
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <FontInput />

            <InputArea className="h-64 text-xs whitespace-pre" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

            <GlyphsGrid />

            <Button className="self-end" variant={'outline'} onClick={() => convertToSvg()}>
                Convert
            </Button>

            {/* <Button variant={'outline'}>OK</Button> */}

            <DialogDemo />
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
