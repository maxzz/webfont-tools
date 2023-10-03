import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { Button, InputArea } from '../ui';
import { IconMenuHamburger } from '../ui/icons/normal';
import { DropdownMenu, MenuItemType } from './ui-radix-menu';

const generalMenuItems: MenuItemType[] = [
    {
        id: "new-file",
        label: "New File",
        // shortcut: "⌘+N",
    },
    {
        id: "open-settings",
        label: "Settings",
        // shortcut: "⌘+,",
    },
];

function FontInputTitle() {
    return (
        <div className="py-1 select-none flex items-center justify-between">
            <div className="self-end">
                WOFF2 font data
            </div>
            <div className="">
                <DropdownMenu
                    trigger={
                        <Button className="p-2">
                            <IconMenuHamburger className="w-4 h-4" />
                        </Button>
                    }
                    items={generalMenuItems}
                    onCommand={(id) => { console.log(id); }}
                />
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
