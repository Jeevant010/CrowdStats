import { FC } from 'react';
import { DynamicContextProps, IDynamicContext } from './types';
export declare const PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = "2762a57b-faa4-41ce-9f16-abff9300e2c9";
export declare const DynamicContext: import("react").Context<IDynamicContext | undefined>;
/** The context provider itself we only use internally */
export declare const InnerDynamicContextProvider: FC<DynamicContextProps>;
/** The context provider you need to have access too all of Dynamic's hooks */
export declare const DynamicContextProvider: FC<DynamicContextProps>;
