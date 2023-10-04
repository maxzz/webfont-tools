import { ModeToggle } from "../ui/shadcn";

export function Header() {
    return (
        <div className="p-4 bg-primary-foreground flex items-center justify-end">
            <ModeToggle />
        </div>
    );
}
