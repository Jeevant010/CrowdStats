import { FC } from 'react';
export interface ConnectedApp {
    name: string;
    url: string;
    icon: string;
    topic: string;
}
export type ConnectedAppsViewProps = {
    name?: string;
};
export declare const ConnectedAppsView: FC<ConnectedAppsViewProps>;
export default ConnectedAppsView;
