import { HTMLAttributes, InputHTMLAttributes, ReactNode, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { classNames } from '@/utils';
import { FontData, fontData, getFont } from '@/storage';

const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';

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
                className={classNames(inputClasses, className)}
                value={snap[name] as string}
                onChange={(e) => { (store as any)[name] = e.target.value; }}
                {...rest}
            />
        </div>
    );
}

function Button({ children, className, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames('px-4 py-2 bg-primary-200 border-primary-400 border rounded', className)} {...rest}>
            {children}
        </button>
    );
}

async function convert(fontText: string) {
    if (!fontText) {
        return;
    }
    try {
        // const encoder = new TextEncoder();
        // const buffer = encoder.encode(fontText);
        // getFont(buffer.buffer);

        // const encoder = new TextEncoder();
        // const buffer = encoder.encode(fontText);

        const res = await getFont(fontText);
        fontData.xmlText = res;
    } catch (error) {
        console.log(error);
    }
}

function ConvertForm() {
    return (
        <div className="flex flex-col space-y-2">
            <InputArea className="h-64 text-xs" store={fontData} name="fontText" label="Woff2 font data" />

            <InputArea className="h-64 text-xs" store={fontData} name="xmlText" label="SVG font" />

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
