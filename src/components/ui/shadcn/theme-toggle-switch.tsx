import { appSettings } from "@/store/app-settings";
import { useSnapshot } from "valtio";
import { Button } from "./button";
import { ChevronDown, CheckIcon } from 'lucide-react';
import { IconDark, IconLight, IconSystem } from "../icons/normal";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from ".";
import { Theme } from "@/utils/theme-apply";

function Item({ label, theme, current }: { label: string; theme: Theme; current: Theme; }) {
    return (
        <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => appSettings.theme = theme}
        >
            <div className="">{label}</div>
            {current === theme && <CheckIcon className="w-4 h-4 ml-2" />}
        </DropdownMenuItem>
    );
}

export function ThemeSwitch() {
    const { theme } = useSnapshot(appSettings);

    const isDark = theme === "dark";
    const isSystem = theme === "system";
    const isLight = !isDark && !isSystem;
    return (
        <div className="focus-within:ring-1 focus-within:ring-ring rounded-md flex items-center">
            <Button
                variant={'ghost'}
                size={'sm'}
                tabIndex={-1}
                className="py-0 border-y border-l border-input rounded-r-none"
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
                        size={'sm'}
                        className="px-1 py-0 border border-input rounded-l-none focus-visible:ring-0"
                        onClick={() => appSettings.theme = 'system'}
                    >
                        <ChevronDown className="w-3 h-3" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <Item label="Light" current={theme} theme="light" />
                    <Item label="Dark" current={theme} theme="dark" />
                    <Item label="System" current={theme} theme="system" />
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    );
}
