declare const trim: (input: string) => string;
declare const htmlToText: (html: string | null | undefined) => string;
declare const delay: (ms: number) => Promise<unknown>;
declare const isNullOrUndefined: (input: any) => boolean;
declare const isBlank: (input: string | null | undefined) => boolean;
declare const isUrl: (input: string | null | undefined) => boolean;
declare const isImage: (input: string | null | undefined) => boolean;
declare const isObjectID: (id: string | null | undefined) => boolean;
declare const now: () => number;
declare const objectID: (id: string | null | undefined) => string;
declare const LINK: (link: string, params?: object) => URL;
declare const host: (link: string) => string;
declare const numberFormat: (number: any, padding?: number, dsep?: string, tsep?: string) => string | 0;
declare const toKb: (num: number | null | undefined, suffix?: any, decimal?: number) => string | number;
declare const debounce: (func: Function, wait: number) => (...args: any[]) => void;
export { now, trim, htmlToText, isBlank, isImage, isUrl, isNullOrUndefined, isObjectID, objectID, debounce, delay, toKb, numberFormat, LINK, host };
