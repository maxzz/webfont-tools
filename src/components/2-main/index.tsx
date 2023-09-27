import { HTMLAttributes, InputHTMLAttributes, ReactNode, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { classNames } from '@/utils';
import { FontData, fontData, getFont, xml2Js } from '@/storage';

const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';
export const inputFocusClasses = "focus:ring-primary-600 dark:focus:ring-primary-400 focus:ring-offset-primary-200 dark:focus:ring-offset-primary-800 focus:ring-1 focus:ring-offset-1 focus:outline-none";

function Input({ store, name, label, className, ...rest }: { store: FontData, name: keyof FontData; label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">{label}</div>
            <input className={classNames(inputClasses, className)} value={snap[name]} onChange={(e) => { store[name] = e.target.value; }} {...rest} />
        </div>
    );
}

function InputArea<T extends {}>({ store, name, label, className, ...rest }: { store: T, name: keyof T; label: string; } & HTMLAttributes<HTMLTextAreaElement>) {
    const snap = useSnapshot(store) as T;
    return (
        <div className="">
            <div className="">{label}</div>
            <textarea
                className={classNames(inputClasses, inputFocusClasses, className)}
                value={snap[name] as string}
                onChange={(e) => { (store as any)[name] = e.target.value; }}
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

async function convert(fontText: string) {
    if (!fontText) {
        return;
    }
    try {
        const res = await getFont(fontText);
        fontData.xmlText = res;

        const obj = xml2Js(fontData.xmlText);
        console.log(obj);
        
    } catch (error) {
        console.log(error);
        fontData.xmlText = '';
    }
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <InputArea className="h-64 text-xs" store={fontData} name="fontText" label="Woff2 font data" spellCheck="false" />

            <InputArea className="h-64 text-xs" store={fontData} name="xmlText" label="SVG font" spellCheck="false" />

            <Button
                className="self-end"
                onClick={() => {
                    convert(fontData.fontText);
                }}
            >
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
