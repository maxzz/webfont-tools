import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { Button } from '@/components/ui/shadcn';
import { TitleBarMenu } from './02-menu';
import { dialogState } from '../04-dialog-svg-font/state-ui';

function ButtonCopy() {
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

export function FontInputTitleBar() {
    return (
        <div className="py-1 select-none flex items-center justify-between">
            <div className="self-end">
                WOFF2 font data
            </div>

            <div className="flex items-center space-x-2">

                <ButtonCopy />
                <TitleBarMenu />
            </div>
        </div>
    );
}
