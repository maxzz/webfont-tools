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

export const DropdownMenu2 = (props: DropdownMenuProps) => {
    return (
        <div className="relative inline-block text-left">
            <dm.Root>
                <dm.Trigger asChild>
                    <Button>Click</Button>
                </dm.Trigger>

                <dm.Portal>
                    <dm.Content
                        align="end"
                        sideOffset={5}
                        className={classNames(
                            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                            "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
                            "bg-white dark:bg-gray-800"
                        )}
                    >
                        {generalMenuItems.map(({ label, icon, shortcut }, i) => (
                            <dm.Item
                                key={`${label}-${i}`}
                                className={classNames(
                                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                                    "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                                )}
                            >
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
