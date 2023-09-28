import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { useSnapshot } from 'valtio';
import { classNames } from '@/utils';
import { FontData } from '@/store';
import { inputFocusClasses } from '../ui/shared-styles';
import { TextValueFields, TextValueKeys } from '@/store/types';

type FontDataTextValueKeys = TextValueKeys<FontData>;

const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';

export function Input({ store, name, label, className, ...rest }: {
    store: FontData;
    name: FontDataTextValueKeys;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>
) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">
                {label}
            </div>

            <input
                className={classNames(inputClasses, className)}
                value={snap[name]}
                onChange={(e) => { store[name] = e.target.value; }}
                {...rest}
            />
        </div>
    );
}

export function InputArea<TStore extends object, T extends Record<string, any> = TextValueFields<TStore>>({ store, name, label, className, ...rest }: {
    store: TStore;
    name: keyof T;
    label: string;
} & HTMLAttributes<HTMLTextAreaElement>
) {
    const snap = useSnapshot(store) as T;
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

// export function InputArea<TStore extends object, T extends Record<string, any> = TextValueFields<TStore>>({ store, name, label, className, ...rest }: {
//     store: TStore;
//     name: keyof T;
//     label: string;
// } & HTMLAttributes<HTMLTextAreaElement>
// ) {
//     const snap = useSnapshot(store) as T;
//     return (
//         <div className="">
//             <div className="">
//                 {label}
//             </div>

//             <textarea
//                 className={classNames(inputClasses, inputFocusClasses, className)}
//                 value={snap[name]}
//                 onChange={(e) => { (store as any)[name] = e.target.value; }}
//                 {...rest}
//             />
//         </div>
//     );
// }

// export function InputArea<TStore extends object, T extends Record<string, any> = TextValueFields<TStore>>({ store, name, label, className, ...rest }: {
//     store: TStore;
//     name: keyof T;
//     label: string;
// } & HTMLAttributes<HTMLTextAreaElement>
// ) {
//     const snap = useSnapshot(store) as T;
//     return (
//         <div className="">
//             <div className="">
//                 {label}
//             </div>

//             <textarea
//                 className={classNames(inputClasses, inputFocusClasses, className)}
//                 value={snap[name]}
//                 onChange={(e) => { store[name] = e.target.value; }}
//                 {...rest}
//             />
//         </div>
//     );
// }

// export function InputArea<TKey extends string, TStore = Record<TKey, any>>({ store, name, label, className, ...rest }: {
//     store: TextValueFields<TStore>;
//     name: TextValueKeys<TStore>;
//     label: string;
// } & HTMLAttributes<HTMLTextAreaElement>
// ) {
//     const snap = useSnapshot(store);
//     return (
//         <div className="">
//             <div className="">
//                 {label}
//             </div>

//             <textarea
//                 className={classNames(inputClasses, inputFocusClasses, className)}
//                 value={snap[name]}
//                 onChange={(e) => { store[name] = e.target.value; }}
//                 {...rest}
//             />
//         </div>
//     );
// }

// export function InputArea<TKey extends string>({ store, name, label, className, ...rest }: {
//     store: TextValueFields<Record<TKey, any>>;
//     name: TextValueKeys<Record<TKey, any>>;
//     label: string;
// } & HTMLAttributes<HTMLTextAreaElement>
// ) {
//     const snap = useSnapshot(store);
//     return (
//         <div className="">
//             <div className="">
//                 {label}
//             </div>

//             <textarea
//                 className={classNames(inputClasses, inputFocusClasses, className)}
//                 value={snap[name]}
//                 onChange={(e) => { store[name] = e.target.value; }}
//                 {...rest}
//             />
//         </div>
//     );
// }

// export function InputArea<T extends FontData>({ store, name, label, className, ...rest }: {
//     store: T;
//     name: TextValueKeys<FontData>;
//     label: string;
// } & HTMLAttributes<HTMLTextAreaElement>
// ) {
//     const snap = useSnapshot(store);
//     return (
//         <div className="">
//             <div className="">
//                 {label}
//             </div>

//             <textarea
//                 className={classNames(inputClasses, inputFocusClasses, className)}
//                 value={snap[name]}
//                 onChange={(e) => { store[name] = e.target.value; }}
//                 {...rest}
//             />
//         </div>
//     );
// }

export function Button({ children, className, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames('px-4 py-2 bg-primary-200 border-primary-400 border rounded', inputFocusClasses, className)} {...rest}>
            {children}
        </button>
    );
}
