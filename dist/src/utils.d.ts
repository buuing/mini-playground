export declare const has: (data: object, key: string | number) => boolean;
export declare const debounce: (fn: Function, wait?: number) => (this: unknown) => void;
export declare const getQuery: (search?: string) => {};
export declare const setQuery: (query: {
    [key: string]: string | number;
}) => void;
export declare const FileLoader: (src: string) => Promise<string>;
export declare const CSSLoader: (src: string) => Promise<string>;
export declare const JSLoader: (src: string) => Promise<string>;
export declare const encode: (value: string) => string;
export declare const decode: (value: string) => string;