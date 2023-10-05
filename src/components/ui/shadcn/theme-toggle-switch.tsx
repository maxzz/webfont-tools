import { appSettings } from "@/store/app-settings";
import { useSnapshot } from "valtio";
import { Button } from "./button";
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { IconDark, IconLight, IconSystem } from "../icons/normal";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from ".";

export function ThemeSwitch() {
    const { theme } = useSnapshot(appSettings);

    const isDark = theme === "dark";
    const isSystem = theme === "system";
    const isLight = !isDark && !isSystem;
    return (
        <div className="focus-within:ring-1 focus-within:ring-ring rounded-md flex items-center">
            <Button
                variant={'ghost'}
                size={'icon'}
                tabIndex={-1}
                className="border-y border-l border-input rounded-r-none"
                onClick={() => appSettings.theme = appSettings.theme === 'dark' ? 'light' : 'dark'}
            >
                {isSystem && <IconSystem className={"w-4 h-4"} />}
                {isLight && <IconLight className={"w-4 h-4"} />}
                {isDark && <IconDark className={"w-3 h-3"} />}
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className="px-1 my-0 border border-input rounded-l-none focus-visible:ring-0"
                        onClick={() => appSettings.theme = 'system'}
                    >
                        <ChevronDown className="w-3 h-3" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => appSettings.theme = "light"}>
                        Light
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => appSettings.theme = "dark"}>
                        Dark
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => appSettings.theme = "system"}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    );
}
