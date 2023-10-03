import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { Button, InputArea } from '../ui';
import { IconMenuHamburger } from '../ui/icons/normal';
import { DropdownMenu2 } from './menu';

function FontInputTitle() {
    return (
        <div className="">
            <div className="">
                WOFF2 font data
            </div>
            <div className="">
                <Button className="px-2 py-1">
                    <IconMenuHamburger className="w-4 h-4" />
                    Clear
                </Button>
                <DropdownMenu2 />
            </div>
        </div>

    );
}

function FontInput() {
    return (
        <div className="">
            <FontInputTitle />
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
