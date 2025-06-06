import { FC } from 'react';
import { CopyKey } from '../../../../../../shared';
import { TooltipProps } from '../../../../../Tooltip/Tooltip';
export type VerifiedUserFieldIconProps = {
    className?: string;
    overwriteTooltipProps?: Partial<TooltipProps>;
    tooltipContent: string;
} & CopyKey;
export declare const VerifiedUserFieldIcon: FC<VerifiedUserFieldIconProps>;
