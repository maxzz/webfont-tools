export * from './svg-font';

/**
 * Extract string values from object
 */
export type TextValueFields<TData> = {
    [K in keyof TData as TData[K] extends string ? K : never]: TData[K];
};

/**
 * Keys of string values from object
 */
export type TextValueKeys<TData> = keyof TextValueFields<TData>;
