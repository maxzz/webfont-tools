import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/shadcn";
import { Input } from "@/components/ui/shadcn";
import { Label } from "@/components/ui/shadcn";
import { Button } from "@/components/ui/shadcn";
import { dialogState } from "./ui-state";
import { useSnapshot } from "valtio";
import { InputArea } from "@/components/ui";
import { fontData } from "@/store";

export function DialogCopySvgFont() {
    const snap = useSnapshot(dialogState);
    const snapText = useSnapshot(fontData).xmlText;
    return (
        <Dialog open={snap.isOpen} onOpenChange={(open) => dialogState.isOpen = open}>
            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>
                        Edit profile
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <InputArea className="h-64 text-xs whitespace-pre smallscroll" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

                <DialogFooter>
                    <Button
                        onClick={() => {
                            navigator.clipboard.writeText(fontData.xmlText);
                            dialogState.isOpen = false;
                        }}
                        disabled={!snapText}
                    >
                        Copy
                    </Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
