import { FC, PropsWithChildren } from 'react';
import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { ModalProps } from '../../shared';
import { ClassStyleProps } from '../../utils/types';
type DynamicAuthLayout = PropsWithChildren & Partial<ModalProps> & ClassStyleProps & {
    projectSettings?: ProjectSettings;
    hideBridgeProgressSteppers?: boolean;
};
export declare const DynamicAuthLayout: FC<DynamicAuthLayout>;
export {};
