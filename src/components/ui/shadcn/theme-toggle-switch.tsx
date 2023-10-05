import { appSettings } from "@/store/app-settings";
import { useSnapshot } from "valtio";
import { Button } from "./button";
import { ChevronDown } from 'lucide-react';
import { IconDark, IconLight, IconSystem } from "../icons/normal";

export function ThemeSwitch() {
    const { theme } = useSnapshot(appSettings);

    const isDark = theme === "dark";
    const isSystem = theme === "system";
    const isLight = !isDark && !isSystem;
    return (<>
        <Button
            variant={'ghost'}
            size={'sm'}
            className="border-y border-l rounded-r-none"
            onClick={() => appSettings.theme = appSettings.theme === 'dark' ? 'light' : 'dark'}
        >
            {isSystem && <IconSystem className={"w-4 h-4"} />}
            {isLight && <IconLight className={"w-4 h-4"} />}
            {isDark && <IconDark className={"w-3 h-3"} />}
        </Button>

        <Button
            variant={'ghost'}
            size={'sm'}
            className="px-1 border rounded-l-none"
            onClick={() => appSettings.theme = 'system'}
        >
            <ChevronDown className="w-3 h-3" />
        </Button>
    </>);
}
