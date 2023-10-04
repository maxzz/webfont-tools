import { appSettings } from "@/store/app-settings";
import { useSnapshot } from "valtio";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
    const { theme } = useSnapshot(appSettings);
    const isDark = theme === "dark";
    return (
        <Button variant={'outline'} size={'sm'}>
            <Moon />
            <Sun />
            System
        </Button>
    );
}
