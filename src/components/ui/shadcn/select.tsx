"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTriggerClasses = "\
px-3 py-2 h-9 w-full text-sm \
border-input \
bg-transparent \
\
ring-offset-background \
placeholder:text-muted-foreground \
\
focus:outline-none \
focus:ring-1 \
focus:ring-ring \
\
disabled:cursor-not-allowed \
disabled:opacity-50 \
\
border rounded-md shadow-sm \
flex items-center justify-between";
const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(
    ({ className, children, ...rest }, ref) => (
        <SelectPrimitive.Trigger ref={ref} className={cn(SelectTriggerClasses, className)} {...rest}>
            {children}
            <SelectPrimitive.Icon asChild>
                <CaretSortIcon className="h-4 w-4 opacity-50" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContentClasses = "\
z-50 relative min-w-[8rem] \
bg-popover \
text-popover-foreground \
\
data-[state=open]:animate-in \
data-[state=closed]:animate-out \
data-[state=closed]:fade-out-0 \
data-[state=open]:fade-in-0 \
data-[state=closed]:zoom-out-95 \
data-[state=open]:zoom-in-95 \
\
data-[side=bottom]:slide-in-from-top-2 \
data-[side=left]:slide-in-from-right-2 \
data-[side=right]:slide-in-from-left-2 \
data-[side=top]:slide-in-from-bottom-2 \
overflow-hidden \
border rounded-md shadow-md";
const SelectContentPopperClasses = "\
data-[side=bottom]:translate-y-1 \
data-[side=left]:-translate-x-1 \
data-[side=right]:translate-x-1 \
data-[side=top]:-translate-y-1";
const SelectContentViewportPopperClasses = "\
w-full \
h-[var(--radix-select-trigger-height)] \
min-w-[var(--radix-select-trigger-width)]";
const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
    ({ className, children, position = "popper", ...rest }, ref) => (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn(SelectContentClasses, position === "popper" && SelectContentPopperClasses, className)}
                position={position}
                {...rest}
            >
                <SelectPrimitive.Viewport className={cn("p-1", position === "popper" && SelectContentViewportPopperClasses)}>
                    {children}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(
    ({ className, ...props }, ref) => (
        <SelectPrimitive.Label
            ref={ref}
            className={cn("px-2 py-1.5 text-sm font-semibold", className)}
            {...props}
        />
    )
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItemClasses = "\
relative pl-2 pr-8 py-1.5 w-full text-sm \
focus:bg-accent \
focus:text-accent-foreground \
\
data-[disabled]:opacity-50 \
data-[disabled]:pointer-events-none \
\
rounded-sm outline-none select-none cursor-default \
flex items-center";
const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(
    ({ className, children, ...rest }, ref) => (
        <SelectPrimitive.Item ref={ref} className={cn(SelectItemClasses, className)} {...rest} >
            <span className="absolute right-2 h-3.5 w-3.5 flex items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="h-4 w-4" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(
    ({ className, ...rest }, ref) => (
        <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...rest} />
    )
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
};
