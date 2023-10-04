import { appSettings } from "@/store/app-settings";
import { useSnapshot } from "valtio";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";
import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

function IconLight({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-[1.5] stroke-current", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    );
}

// function IconDark({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
//     return (
//         <svg className={classNames("fill-none stroke-[1.5] stroke-current", className)} viewBox="0 0 24 24" {...rest}>
//             {title && <title>{title}</title>}
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//         </svg>
//     );
// }

function IconDark({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-[1.5] stroke-current", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg> */}

function IconSystem({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-[1.5] stroke-current", className)} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...rest}>
            {title && <title>{title}</title>}
            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.9 4.9 1.4 1.4" />
            <path d="m17.7 17.7 1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.3 17.7-1.4 1.4" />
            <path d="m19.1 4.9-1.4 1.4" />
        </svg>
    );
}


{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
stroke-linecap="round" stroke-linejoin="round" 
class="lucide lucide-sun-moon">
    <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="m17.7 17.7 1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.3 17.7-1.4 1.4" />
    <path d="m19.1 4.9-1.4 1.4" />
    </svg>; */}

export function ThemeSwitch() {
    const { theme } = useSnapshot(appSettings);
    const isDark = theme === "dark";
    return (
        <>
            <IconSystem className={"w-4 h-4"} />
            <IconLight className={"w-4 h-4"} />
            <IconDark className={"w-3 h-3"} />
            <Button variant={'outline'} size={'sm'}>
                <Moon />
                <Sun />
                System
            </Button>
        </>);
}
