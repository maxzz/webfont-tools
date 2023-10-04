import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { Button as ButtonRegular, InputArea } from '../ui';
import { FontInputTitleBar } from './top-title-menu';
import { Button, ModeToggle } from '../ui/shadcn';
import { DialogDemo } from './font-svg-view';

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

            <ShowGlyphs />

            <ButtonRegular className="self-end px-4 py-2" onClick={() => convertToSvg()}>
                Convert
            </ButtonRegular>

            <Button variant={'outline'}>OK</Button>

            <DialogDemo />
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <ModeToggle />
            <ConvertForm />
        </div>
    );
}
