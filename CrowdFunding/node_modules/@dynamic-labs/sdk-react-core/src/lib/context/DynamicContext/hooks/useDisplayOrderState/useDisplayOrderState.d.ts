import { ProjectSettings } from '@dynamic-labs/sdk-api-core';
import { DisplayOrder, SetDisplayOrderPriority } from './useDisplayOrderState.types';
export declare const useDisplayOrderState: (projectSettings: ProjectSettings | undefined) => [DisplayOrder, SetDisplayOrderPriority];
