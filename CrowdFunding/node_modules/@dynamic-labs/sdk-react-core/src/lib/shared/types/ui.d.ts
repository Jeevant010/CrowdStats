/// <reference types="react" />
export type Icon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
export interface CopyKey {
    copykey?: string;
}
export interface ModalProps {
    onClose: () => void;
}
export type AccessDeniedCustomButton = {
    action?: () => void;
    title: string;
};
