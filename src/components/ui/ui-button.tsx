import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/utils';
import { inputFocusClasses } from '../ui/shared-styles';

export function Button({ children, className, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames('bg-primary-200 border-primary-400 border rounded', inputFocusClasses, className)}
            {...rest}
        >
            {children}
        </button>
    );
}
