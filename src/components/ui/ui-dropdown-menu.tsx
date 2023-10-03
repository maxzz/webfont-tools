import { ReactNode } from "react";
import * as dm from "@radix-ui/react-dropdown-menu";
import { classNames } from "@/utils";
import { MenuContentProps } from "@radix-ui/react-dropdown-menu";

export interface MenuItemType {
    readonly id: string;
    readonly icon?: ReactNode;
    readonly label: string;
    readonly shortcut?: string;
}

interface DropdownMenuProps {
    trigger: ReactNode;
    onCommand: (id: string) => void;
    items: readonly MenuItemType[];
    containerClasses: string;
    menuContentProps?: MenuContentProps;
}

const contentClasses = " \
p-1 \
bg-white dark:bg-gray-800 \
radix-side-top:animate-slide-up \
radix-side-bottom:animate-slide-down \
rounded-lg shadow-md \
";

const itemClasses = " \
px-2 py-2 text-xs  \
text-gray-950 dark:text-gray-500 \
focus:bg-gray-50 dark:focus:bg-gray-900 \
data-[highlighted]:bg-gray-300 \
dark:data-[highlighted]:bg-gray-950 \
outline-none rounded-md select-none cursor-default flex items-center \
";

export const DropdownMenu = ({ trigger, onCommand, items, containerClasses, menuContentProps }: DropdownMenuProps) => {
    return (
        <div className="relative inline-block text-left">
            <dm.Root>
                <dm.Trigger asChild>
                    {trigger}
                </dm.Trigger>

                <dm.Portal>
                    <dm.Content align="end" {...menuContentProps} className={classNames(contentClasses, containerClasses)}>
                        {items.map(({ id, label, icon, shortcut }, idx) => (
                            <dm.Item key={id} className={itemClasses} onClick={() => onCommand(id)}>
                                {icon}
                                <span className="flex-grow">
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
