/// <reference types="react" />
import { Icon } from '../../shared';
type Props = {
    Icon: Icon;
    className?: string;
    content?: string | JSX.Element;
    iconClassName?: string;
    textClassName?: string;
    title: string | JSX.Element;
};
export declare const InfoItem: ({ title, content, Icon, className, iconClassName, textClassName, }: Props) => JSX.Element;
export {};
