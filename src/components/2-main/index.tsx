import { HTMLAttributes, InputHTMLAttributes, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { classNames } from '../../utils/classnames';



//TODO: commit: WIP. add initial form state with valtio



const inputClasses = 'px-2 py-1 w-full bg-primary-200 border-primary-400 border rounded';

type FormData = {
    fontText: string;
};

function Input({ store, name, label, className, ...rest }: { store: FormData, name: keyof FormData; label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">{label}</div>
            <input className={classNames(inputClasses, className)} value={snap[name]} onChange={(e) => { store[name] = e.target.value; }} {...rest} />
        </div>
    );
}

function InputArea({ store, name, label, className, ...rest }: { store: FormData, name: keyof FormData; label: string; } & HTMLAttributes<HTMLTextAreaElement>) {
    const snap = useSnapshot(store);
    return (
        <div className="">
            <div className="">{label}</div>
            <textarea className={classNames(inputClasses, className)} value={snap[name]} onChange={(e) => { store[name] = e.target.value; }} {...rest} />
        </div>
    );
}

function MainForm() {
    const formData = useState(proxy<FormData>({
        fontText: '',
    }))[0];

    return (
        <div>
            <InputArea store={formData} name="fontText" label="Font" className="h-64" />
        </div>
    );
}

export function Main() {
    return (
        <div className="p-4">
            <MainForm />
        </div>
    );
}
