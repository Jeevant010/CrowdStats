/// <reference types="react" />
import { ViewType } from '../../../context/ViewContext';
interface FooterContentProps {
    heading: string;
    copykey: string;
}
interface HeaderContentProps {
    heading: string | JSX.Element;
    copykey: string;
}
interface DescriptionContentProps {
    text: string;
    copykey: string;
}
interface DynamicLayoutProps {
    view: ViewType;
}
export declare const useDynamicLayoutData: ({ view }: DynamicLayoutProps) => {
    headerData: {
        copykey: string;
        heading: string;
    };
    descriptionData?: undefined;
    helpHeaderData?: undefined;
} | {
    descriptionData: DescriptionContentProps | undefined;
    headerData: HeaderContentProps | undefined;
    helpHeaderData: FooterContentProps | undefined;
};
export {};
