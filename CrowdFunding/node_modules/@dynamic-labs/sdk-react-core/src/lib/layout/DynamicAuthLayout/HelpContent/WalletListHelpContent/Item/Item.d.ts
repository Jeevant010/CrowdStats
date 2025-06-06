/// <reference types="react" />
import { Icon } from '../../../../../shared';
interface Props {
    EndIcon?: Icon;
    StartIcon: Icon;
    heading: string;
    message?: string;
    url: string;
}
export declare const Item: React.FC<Props>;
export {};
