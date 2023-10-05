import { ThemeSwitch } from "../ui/shadcn";

export function Header() {
    return (
        <div className="p-4 bg-primary-foreground flex items-center justify-end gap-x-1">
            <ThemeSwitch />
        </div>
    );
}
