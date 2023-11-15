import { useSnapshot } from "valtio";
import { convertTextToSvgFont, fontData } from "@/store";
import { dialogState } from "../04-dialog-svg-font/state-ui";
import { Button } from "@/components/ui/shadcn";

export function ButtonCopy() {
    const snapText = useSnapshot(fontData).xmlText;
    return (
        <Button
            variant={'outline'}
            size={'sm'}
            onClick={() => dialogState.isOpen = true}
            disabled={!snapText}
        >
            SVG
        </Button>
    );
}

export function ButtonConvert() {
    return (
        <Button className="self-end" variant={'outline'} size={'sm'} onClick={() => convertTextToSvgFont()}>
            Convert
        </Button>
    );
}
