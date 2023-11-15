import { Button } from '@/components/ui/shadcn';
import { IconMenuHamburger } from '@/components/ui/icons/normal';
import { DropdownMenu, MenuItemType } from '@/components/ui/ui-dropdown-menu';

const topMenuItems = [
    {
        id: "new-file",
        label: "New File",
    }, {
        id: "open-settings",
        label: "Settings",
    },
] as const satisfies readonly MenuItemType[];

type MenuCommands = (typeof topMenuItems)[number]['id'];

const containerClasses = "w-20";

export function TitleBarMenu() {
    function onCommand(id: MenuCommands) {
        switch (id) {
            case "new-file":
                console.log(id);
                break;
            case "open-settings":
                console.log(id);
                break;
            default: {
                const test: never = id;
            }
        }
    }
    return (
        <DropdownMenu
            trigger={
                <Button variant={'outline'} size={'sm'} className="px-2" >
                    <IconMenuHamburger className="w-4 h-4" />
                </Button>
            }
            items={topMenuItems}
            containerClasses={containerClasses}
            menuContentProps={{ sideOffset: 1 }}
            onCommand={onCommand}
        />
    );
}
