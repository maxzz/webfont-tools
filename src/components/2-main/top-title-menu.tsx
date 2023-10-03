import { Button } from '../ui';
import { IconMenuHamburger } from '../ui/icons/normal';
import { DropdownMenu, MenuItemType } from '../ui/ui-dropdown-menu';

const topMenuItems: readonly MenuItemType[] = [
    {
        id: "new-file",
        label: "New File",
    }, {
        id: "open-settings",
        label: "Settings",
    },
] as const;

const containerClasses = "w-20";

export function FontInputTitleBar() {
    function onCommand(id: string) {
        switch (id as (typeof topMenuItems)[number]['id']) {
            case "new-file":
                console.log(id);
                break;
            case "open-settings":
                console.log(id);
                break;
        }
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
                    items={topMenuItems}
                    containerClasses={containerClasses}
                    menuContentProps={{ sideOffset: 1 }}
                    onCommand={onCommand}
                />
            </div>
        </div>
    );
}
