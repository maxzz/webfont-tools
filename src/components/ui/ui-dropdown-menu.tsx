import { ReactNode } from "react";
import * as Prim from "@radix-ui/react-dropdown-menu";
import { classNames } from "@/utils";

export interface MenuItemType {
    readonly id: string;
    readonly icon?: ReactNode;
    readonly label: string;
    readonly shortcut?: string;
}

export type MenuCommands<T extends {id: any}[]> = T[number]['id'];

interface DropdownMenuProps<T extends MenuItemType> {
    trigger: ReactNode;
    onCommand: (id: MenuCommands<T[]>) => void;
    items: readonly T[];
    containerClasses: string;
    menuContentProps?: Prim.MenuContentProps;
}

const contentClasses = " \
p-1 \
bg-background \
radix-side-top:animate-slide-up \
radix-side-bottom:animate-slide-down \
rounded-md shadow-md \
";

const itemClasses = " \
px-2 py-2 text-xs  \
focus:bg-accent \
focus:text-accent-foreground \
outline-none rounded-md select-none cursor-default flex items-center \
";

export function DropdownMenu<T extends MenuItemType>({ trigger, onCommand, items, containerClasses, menuContentProps }: DropdownMenuProps<T>) {
    return (
        <div className="relative inline-block text-left">
            <Prim.Root>
                <Prim.Trigger asChild>
                    {trigger}
                </Prim.Trigger>

                <Prim.Portal>
                    <Prim.Content align="end" {...menuContentProps} className={classNames(contentClasses, containerClasses)}>
                        {items.map(({ id, label, icon, shortcut }, idx) => (
                            <Prim.Item key={id} className={itemClasses} onClick={() => onCommand(id)}>
                                {icon}
                                <span className="flex-grow">
                                    {label}
                                </span>
                                {shortcut && <span className="text-xs">{shortcut}</span>}
                            </Prim.Item>
                        ))}
                    </Prim.Content>
                </Prim.Portal>
            </Prim.Root>
        </div>
    );
}
