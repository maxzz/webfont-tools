"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const labelVariantsClasses = "\
text-sm \
font-medium \
leading-none \
peer-disabled:cursor-not-allowed \
peer-disabled:opacity-70";

const labelVariants = cva(labelVariantsClasses);

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...rest }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...rest} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
