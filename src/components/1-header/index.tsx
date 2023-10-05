import { ThemeSwitch } from "../ui/shadcn";
import { IconAppLogo } from "../ui/icons/normal";

export function Header() {
    return (
        <div className="p-2  flex items-center justify-between bg-primary-foreground">
            <div className="flex items-center gap-x-1">
                <IconAppLogo className="ml-2 w-7 h-7 stroke-none fill-slate-600 -rotate-90" />

                <div className="pb-1.5 text-3xl font-extralight tracking-tighter text-slate-600 uppercase ">
                    Web Font Tools
                </div>
            </div>

            <div className="flex items-center justify-end gap-x-1">
                <ThemeSwitch />
            </div>

        </div>
    );
}
