import { ReactNode } from "react";
import * as dm from "@radix-ui/react-dropdown-menu";
import { classNames } from "@/utils";
import { Button } from "../ui";

interface RadixMenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}

const generalMenuItems: RadixMenuItem[] = [
    {
        label: "New File",
        shortcut: "⌘+N",
    },
    {
        label: "Settings",
        shortcut: "⌘+,",
    },
];

interface DropdownMenuProps {
    trigger?: ReactNode;
}

const contentClasses = " \
px-1.5 py-1 w-48 md:w-56 \
bg-white dark:bg-gray-800 \
radix-side-top:animate-slide-up \
radix-side-bottom:animate-slide-down \
rounded-lg shadow-md \
";

const itemClasses = " \
px-2 py-2 text-xs  \
text-gray-400 dark:text-gray-500 focus:bg-gray-50 dark:focus:bg-gray-900 \
outline-none rounded-md select-none cursor-default flex items-center \
";

export const DropdownMenu2 = (props: DropdownMenuProps) => {
    return (
        <div className="relative inline-block text-left">
            <dm.Root>
                <dm.Trigger asChild>
                    <Button>Click</Button>
                </dm.Trigger>

                <dm.Portal>
                    <dm.Content align="end" sideOffset={5} className={contentClasses} onClick={()=>console.log('2')}>
                        {generalMenuItems.map(({ label, icon, shortcut }, i) => (
                            <dm.Item key={`${label}-${i}`} className={itemClasses} onClick={()=>console.log('1')}>
                                {icon}
                                <span className="flex-grow text-gray-700 dark:text-gray-300">
                                    {label}
                                </span>
                                {shortcut && <span className="text-xs">{shortcut}</span>}
                            </dm.Item>
                        ))}
                    </dm.Content>
                </dm.Portal>
            </dm.Root>
        </div>
    );
};
