import React, { type FC } from 'react';
export declare const ICONIC_SPRITE_URL: string;
export type Iconic = FC<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}> & {
    iconName: string;
    sourcePath: string;
};
export declare const createIconic: (props: {
    sourcePath: string;
    iconName: string;
    alt: string;
}) => Iconic;
