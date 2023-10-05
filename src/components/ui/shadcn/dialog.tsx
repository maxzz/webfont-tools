"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlayClasses = "\
fixed inset-0 z-50 \
\
bg-background/80 \
backdrop-blur-sm \
\
data-[state=open]:animate-in \
data-[state=closed]:animate-out \
data-[state=closed]:fade-out-0 \
data-[state=open]:fade-in-0";
const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...rest }, ref) => (
    <DialogPrimitive.Overlay ref={ref} className={cn(DialogOverlayClasses, className)} {...rest} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContentClasses = "\
fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 \
p-6 w-full md:w-full max-w-lg \
\
bg-background \
\
data-[state=open]:animate-in \
data-[state=open]:fade-in-0 \
data-[state=open]:zoom-in-95 \
data-[state=open]:slide-in-from-left-1/2 \
data-[state=open]:slide-in-from-top-[48%] \
\
data-[state=closed]:animate-out \
data-[state=closed]:fade-out-0 \
data-[state=closed]:zoom-out-95 \
data-[state=closed]:slide-out-to-left-1/2 \
data-[state=closed]:slide-out-to-top-[48%] \
\
border sm:rounded-lg shadow-lg \
duration-200 \
grid gap-4";
const DialogContentCloseClasses = "\
absolute right-4 top-4 \
opacity-70 transition-opacity\
\
hover:opacity-100 \
focus:outline-none \
focus:ring-2 \
focus:ring-ring \
focus:ring-offset-2 \
\
data-[state=open]:bg-accent \
data-[state=open]:text-muted-foreground \
\
ring-offset-background \
\
rounded-sm \
disabled:pointer-events-none";
const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...rest }, ref) => (
    <DialogPortal>
        <DialogOverlay />

        <DialogPrimitive.Content ref={ref} className={cn(DialogContentClasses, className)} {...rest}>
            {children}

            <DialogPrimitive.Close className={DialogContentCloseClasses}>
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>

        </DialogPrimitive.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-center sm:text-left flex flex-col space-y-1.5", className)} {...rest} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...rest} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...rest }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...rest} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...rest }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...rest} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
