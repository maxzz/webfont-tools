import { fontData, convertToSvg, fontDataSource } from '@/store';
import { ShowGlyphs } from './view-glyphs';
import { Button, InputArea } from '../ui';
import { IconMenuHamburger } from '../ui/icons/normal';
import { DropdownMenu, MenuItemType } from '../ui/ui-dropdown-menu';

const generalMenuItems: readonly MenuItemType[] = [
    {
        id: "new-file",
        label: "New File",
    }, {
        id: "open-settings",
        label: "Settings",
    },
] as const;

const containerClasses = "w-20";

function FontInputTitle() {
    function onCommand(id: string) {
        type TKeys = (typeof generalMenuItems)[number]['id'];
        switch (id as TKeys) {
            case "new-file":
                break;
            case "open-settings":
                break;
        }
        console.log(id);
    }
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
                    containerClasses={containerClasses}
                    menuContentProps={{ sideOffset: 1 }}
                    onCommand={onCommand}
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
