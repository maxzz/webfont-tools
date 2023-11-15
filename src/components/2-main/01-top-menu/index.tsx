import { Button } from '@/components/ui/shadcn';
import { dialogState } from '../04-dialog-svg-font/state-ui';
import { TitleBarMenu } from './02-menu';

export function FontInputTitleBar() {
    return (
        <div className="py-1 select-none flex items-center justify-between">
            <div className="self-end">
                WOFF2 font data
            </div>

            <div className="flex items-center space-x-2">
                <Button variant={'outline'} size={'sm'} onClick={() => dialogState.isOpen = true}>
                    SVG
                </Button>

                <TitleBarMenu />
            </div>
        </div>
    );
}
