import { FC, PropsWithChildren } from 'react';
import { ClassStyleProps } from '../../../../utils/types';
export type VerticalAccordionComponent = FC<PropsWithChildren<ClassStyleProps & {
    view?: string;
}>>;
