import { ReactNode, useState } from "react";
import { classNames } from "@/utils";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui";

interface RadixMenuItem {
    label: string;
    shortcut?: string;
    icon?: ReactNode;
}

interface User {
    name: string;
    url?: string;
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

const regionToolMenuItems: RadixMenuItem[] = [
    {
        label: "Frame",
        shortcut: "⌘+F",
    },
    {
        label: "Crop",
        shortcut: "⌘+S",
    },
];

const users: User[] = [
    {
        name: "Adam",
        url: "https://github.com/adamwathan.png",
    },
    {
        name: "Steve",
        url: "https://github.com/steveschoger.png",
    },
    {
        name: "Robin",
        url: "https://github.com/robinmalfait.png",
    },
];

interface DropdownMenuProps { }

export const DropdownMenu2 = (props: DropdownMenuProps) => {
    const [showGrid, setShowGrid] = useState(false);
    const [showUi, setShowUi] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <DropdownMenuPrimitive.Root>
                <DropdownMenuPrimitive.Trigger asChild>
                    <Button>Click</Button>
                </DropdownMenuPrimitive.Trigger>

                <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                        align="end"
                        sideOffset={5}
                        className={classNames(
                            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                            "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
                            "bg-white dark:bg-gray-800"
                        )}
                    >
                        {generalMenuItems.map(({ label, icon, shortcut }, i) => (
                            <DropdownMenuPrimitive.Item
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
                            </DropdownMenuPrimitive.Item>
                        ))}

                        <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

                        <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

                        <DropdownMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
                            Region Tools
                        </DropdownMenuPrimitive.Label>

                        {regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
                            <DropdownMenuPrimitive.Item
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
                            </DropdownMenuPrimitive.Item>
                        ))}

                        <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

                    </DropdownMenuPrimitive.Content>
                </DropdownMenuPrimitive.Portal>
            </DropdownMenuPrimitive.Root>
        </div>
    );
};
