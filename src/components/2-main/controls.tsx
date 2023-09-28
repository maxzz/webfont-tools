import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { useSnapshot } from 'valtio';
import { classNames } from '@/utils';
import { inputFocusClasses } from '../ui/shared-styles';
import { TextValueFields, TextValueKeys } from '@/store/types';

const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';

export function Input<TStore extends object>({ store, name, label, className, ...rest }: {
    store: TStore;
    name: TextValueKeys<TStore>;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>
) {
    const snap = useSnapshot(store as any);
    return (
        <div className="">
            <div className="">
                {label}
            </div>

            <input
                className={classNames(inputClasses, className)}
                value={snap[name]}
                onChange={(e) => { (store as any)[name] = e.target.value; }}
                {...rest}
            />
        </div>
    );
}

export function InputArea<TStore extends object>({ store, name, label, className, ...rest }: {
    store: TStore;
    name: TextValueKeys<TStore>;
    label: string;
} & HTMLAttributes<HTMLTextAreaElement>
) {
    const snap = useSnapshot(store as any);
    return (
        <div className="">
            <div className="">
                {label}
            </div>

            <textarea
                className={classNames(inputClasses, inputFocusClasses, className)}
                value={snap[name]}
                onChange={(e) => { (store as any)[name] = e.target.value; }}
                {...rest}
            />
        </div>
    );
}

export function Button({ children, className, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames('px-4 py-2 bg-primary-200 border-primary-400 border rounded', inputFocusClasses, className)}
            {...rest}
        >
            {children}
        </button>
    );
}
