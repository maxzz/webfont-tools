"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, DotFilledIcon, } from "@radix-ui/react-icons";
import { cn } from "@/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTriggerClasses = "\
px-2 py-1.5 text-sm \
\
focus:bg-accent \
data-[state=open]:bg-accent \
\
rounded-sm outline-none select-none cursor-default \
flex items-center";
const DropdownMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean; }
>(
    ({ className, inset, children, ...rest }, ref) => (
        <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn(DropdownMenuSubTriggerClasses, inset && "pl-8", className)} {...rest}>
            {children}
            <ChevronRightIcon className="ml-auto h-4 w-4" />
        </DropdownMenuPrimitive.SubTrigger>
    )
);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContentClasses = "\
p-1 min-w-[8rem] z-50 \
\
text-popover-foreground \
bg-popover \
\
data-[state=open]:animate-in \
data-[state=open]:fade-in-0 \
data-[state=open]:zoom-in-95 \
\
data-[state=closed]:animate-out \
data-[state=closed]:fade-out-0 \
data-[state=closed]:zoom-out-95 \
\
data-[side=bottom]:slide-in-from-top-2 \
data-[side=left]:slide-in-from-right-2 \
data-[side=right]:slide-in-from-left-2 \
data-[side=top]:slide-in-from-bottom-2 \
\
overflow-hidden \
border rounded-md shadow-lg";
const DropdownMenuSubContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(
    ({ className, ...rest }, ref) => (
        <DropdownMenuPrimitive.SubContent ref={ref} className={cn(DropdownMenuSubContentClasses, className)} {...rest} />
    )
);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContentClasses = "\
p-1 min-w-[8rem] z-50 \
\
text-popover-foreground \
bg-popover \
\
data-[state=open]:animate-in \
data-[state=open]:fade-in-0 \
data-[state=open]:zoom-in-95 \
\
data-[state=closed]:animate-out \
data-[state=closed]:fade-out-0 \
data-[state=closed]:zoom-out-95 \
\
data-[side=bottom]:slide-in-from-top-2 \
data-[side=left]:slide-in-from-right-2 \
data-[side=right]:slide-in-from-left-2 \
data-[side=top]:slide-in-from-bottom-2 \
\
overflow-hidden \
border rounded-md shadow-md";
const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(
    ({ className, sideOffset = 4, ...rest }, ref) => (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content ref={ref} className={cn(DropdownMenuContentClasses, className)} sideOffset={sideOffset} {...rest} />
        </DropdownMenuPrimitive.Portal>
    )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItemClasses = "\
relative px-2 py-1.5 text-sm \
\
focus:text-accent-foreground \
focus:bg-accent \
\
data-[disabled]:opacity-50 \
data-[disabled]:pointer-events-none \
\
transition-colors \
rounded-sm outline-none select-none cursor-default \
flex items-center";
const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean; }
>(
    ({ className, inset, ...rest }, ref) => (
        <DropdownMenuPrimitive.Item ref={ref} className={cn(DropdownMenuItemClasses, inset && "pl-8", className)} {...rest} />
    )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItemClasses = "\
relative pl-8 pr-2 py-1.5 text-sm \
\
focus:text-accent-foreground \
focus:bg-accent \
\
data-[disabled]:opacity-50 \
data-[disabled]:pointer-events-none \
\
transition-colors \
rounded-sm outline-none select-none cursor-default \
flex items-center";
const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(
    ({ className, children, checked, ...rest }, ref) => (
        <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn(DropdownMenuCheckboxItemClasses, className)} checked={checked} {...rest}>
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <CheckIcon className="h-4 w-4" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.CheckboxItem>
    )
);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItemClasses = "\
relative pl-8 pr-2 py-1.5 text-sm \
\
focus:text-accent-foreground \
focus:bg-accent \
\
data-[disabled]:opacity-50 \
data-[disabled]:pointer-events-none \
\
transition-colors \
rounded-sm outline-none select-none cursor-default \
flex items-center";
const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(
    ({ className, children, ...rest }, ref) => (
        <DropdownMenuPrimitive.RadioItem ref={ref} className={cn(DropdownMenuRadioItemClasses, className)} {...rest}>
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <DotFilledIcon className="h-4 w-4 fill-current" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.RadioItem>
    )
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean; }
>(
    ({ className, inset, ...props }, ref) => (
        <DropdownMenuPrimitive.Label
            ref={ref}
            className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
            {...props}
        />
    )
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(
    ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
    )
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...rest} />
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};
