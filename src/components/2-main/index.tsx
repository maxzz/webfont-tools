import { fontData, convertToSvg, fontDataSource } from '@/store';
import { GlyphsGrid } from './03-glyphs-grid';
import { InputArea } from '../ui';
import { FontInputTitleBar } from './01-top-menu/top-title-menu';
import { Button } from '../ui/shadcn';
import { DialogCopySvgFont } from './04-svg-font-preview';
import { dialogState } from './04-svg-font-preview/ui-state';

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

            <Button variant={'outline'} onClick={() => { dialogState.isOpen = true; }}>OK</Button>

            <DialogCopySvgFont />
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
