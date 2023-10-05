import { ThemeSwitch } from "../ui/shadcn";
import { IconAppLogo } from "../ui/icons/normal";

export function Header() {
    return (
        <div className="p-2  flex items-center justify-between">
            <div className="flex items-center gap-x-1">
                <IconAppLogo className="w-7 h-7 stroke-none fill-slate-600" />

                <div className="text-3xl uppercase dark:opacity-20">
                    Web Font Tools
                </div>
            </div>

            <div className="bg-primary-foreground flex items-center justify-end gap-x-1">
                <ThemeSwitch />
            </div>

        </div>
    );
}
