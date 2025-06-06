'use client'
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { PlatformService } from '@dynamic-labs/utils';
import { Typography } from '../Typography/Typography.js';
import { Chip } from '../Chip/Chip.js';
import { getGlobalWalletContext } from '../../shared/utils/functions/getGlobalWalletContext/getGlobalWalletContext.js';

const AppOriginTile = ({ origin }) => {
    const { requesterOrigin } = getGlobalWalletContext();
    const displayOrigin = useMemo(() => {
        if (origin) {
            return origin;
        }
        if (requesterOrigin) {
            return requesterOrigin;
        }
        return PlatformService.getDisplayOrigin();
    }, [origin, requesterOrigin]);
    if (!displayOrigin) {
        return null;
    }
    return (jsx(Chip, { className: 'app-origin-tile', children: jsx(Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', as: 'span', children: displayOrigin }) }));
};

export { AppOriginTile };
