import { fontData, convertToSvg, fontDataSource } from '@/store';
import { GlyphsGrid } from './03-glyphs-grid';
import { InputArea } from '../ui';
import { FontInputTitleBar } from './01-top-menu';
import { Button } from '../ui/shadcn';
import { DialogCopySvgFont } from './04-dialog-svg-font';

function FontInput() {
    return (
        <div className="">
            <FontInputTitleBar />
            <InputArea className="h-64 text-xs resizer [&::-webkit-resizer]:rounded [&::-webkit-resizer]:[backgroundSize:80%_80%]" store={fontDataSource} name="text" spellCheck="false" />
        </div>
    );
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <FontInput />

            {/* <InputArea className="h-64 text-xs whitespace-pre" store={fontData} name="xmlText" label="SVG font" spellCheck="false" /> */}

            <GlyphsGrid />

            <Button className="self-end" variant={'outline'} onClick={() => convertToSvg()}>
                Convert
            </Button>
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <ConvertForm />
            <DialogCopySvgFont />
        </div>
    );
}
