import { ButtonConvert, ButtonCopy } from './01-controls';
import { TitleBarMenu } from './02-menu';

export function FontInputTitleBar() {
    return (
        <div className="py-1 select-none flex items-center justify-between">
            <div className="self-end">
                WOFF2 font data
            </div>

            <div className="flex items-center space-x-2">
                <ButtonConvert />
                <ButtonCopy />
                <TitleBarMenu />
            </div>
        </div>
    );
}
