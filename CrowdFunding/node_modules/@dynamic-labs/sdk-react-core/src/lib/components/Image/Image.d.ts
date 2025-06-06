import React from 'react';
type ImageProps = {
    alt?: string;
    className?: string;
    dataTestId?: string;
    fallback?: React.ReactNode;
    src?: string;
};
export declare const Image: ({ src, alt, fallback, className, dataTestId, }: ImageProps) => JSX.Element;
export {};
