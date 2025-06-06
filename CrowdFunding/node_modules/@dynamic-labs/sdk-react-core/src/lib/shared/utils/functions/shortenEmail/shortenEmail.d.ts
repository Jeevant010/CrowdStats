export type ShortenEmailOptions = {
    breakpoint?: number;
    cutEnd?: number;
    cutStart?: number;
};
export declare const shortenEmail: (email?: string, options?: ShortenEmailOptions) => string;
