import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { useSnapshot } from 'valtio';
import { classNames } from '@/utils';
import { fontData, convertToSvg, FontData } from '@/store';
import { inputFocusClasses } from '../ui/shared-styles';
import { ShowGlyphs } from './view-glyphs';
import { TextValueKeys } from '@/store/types';

type FontDataTextValueKeys = TextValueKeys<FontData>;

const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';

function Input({ store, name, label, className, ...rest }: { store: FontData, name: FontDataTextValueKeys; label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">
                {label}
            </div>

            <input className={classNames(inputClasses, className)} value={snap[name]} onChange={(e) => { store[name] = e.target.value; }} {...rest} />
        </div>
    );
}

function InputArea<T extends FontData>({ store, name, label, className, ...rest }: { store: T, name: TextValueKeys<FontData>; label: string; } & HTMLAttributes<HTMLTextAreaElement>) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">
                {label}
            </div>

            <textarea
                className={classNames(inputClasses, inputFocusClasses, className)}
                value={snap[name]}
                onChange={(e) => { store[name] = e.target.value; }}
                {...rest}
            />
        </div>
    );
}

function Button({ children, className, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames('px-4 py-2 bg-primary-200 border-primary-400 border rounded', inputFocusClasses, className)} {...rest}>
            {children}
        </button>
    );
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <InputArea className="h-64 text-xs" store={fontData} name="fontText" label="WOFF2 font data" spellCheck="false" />

            <InputArea className="h-64 text-xs" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

            <ShowGlyphs />

            <Button className="self-end" onClick={() => convertToSvg(fontData.fontText)}>
                Convert
            </Button>
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <ConvertForm />
        </div>
    );
}
