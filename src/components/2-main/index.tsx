import { fontDataSource } from '@/store';
import { GlyphsGrid } from './03-glyphs-grid';
import { InputArea } from '../ui';
import { FontInputTitleBar } from './01-top-menu';
import { DialogCopySvgFont } from './04-dialog-svg-font';
import { textareaClasses } from '../ui/shared-styles';

function FontInput() {
    return (
        <div className="">
            <FontInputTitleBar />
            <InputArea className={`h-64 text-xs ${textareaClasses}`} store={fontDataSource} name="text" spellCheck="false" />
        </div>
    );
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <FontInput />
            <GlyphsGrid />
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <ConvertForm />
            <DialogCopySvgFont />
        </div>
    );
}
