import { z } from 'zod';
export declare const walletConnectSourceValueSchema: z.ZodObject<{
    app: z.ZodObject<{
        android: z.ZodNullable<z.ZodString>;
        browser: z.ZodNullable<z.ZodString>;
        chrome: z.ZodNullable<z.ZodString>;
        edge: z.ZodNullable<z.ZodString>;
        firefox: z.ZodNullable<z.ZodString>;
        ios: z.ZodNullable<z.ZodString>;
        linux: z.ZodNullable<z.ZodString>;
        mac: z.ZodNullable<z.ZodString>;
        opera: z.ZodNullable<z.ZodString>;
        safari: z.ZodNullable<z.ZodString>;
        windows: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    }, {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    }>;
    app_type: z.ZodString;
    category: z.ZodNullable<z.ZodString>;
    chains: z.ZodArray<z.ZodString, "many">;
    description: z.ZodNullable<z.ZodString>;
    desktop: z.ZodObject<{
        native: z.ZodNullable<z.ZodString>;
        universal: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        native: string | null;
        universal: string | null;
    }, {
        native: string | null;
        universal: string | null;
    }>;
    homepage: z.ZodString;
    id: z.ZodString;
    image_id: z.ZodString;
    image_url: z.ZodObject<{
        lg: z.ZodString;
        md: z.ZodString;
        sm: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        lg: string;
        md: string;
        sm: string;
    }, {
        lg: string;
        md: string;
        sm: string;
    }>;
    injected: z.ZodNullable<z.ZodArray<z.ZodObject<{
        injected_id: z.ZodString;
        namespace: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        injected_id: string;
        namespace: string;
    }, {
        injected_id: string;
        namespace: string;
    }>, "many">>;
    metadata: z.ZodObject<{
        colors: z.ZodObject<{
            primary: z.ZodNullable<z.ZodString>;
            secondary: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string | null;
            secondary: string | null;
        }, {
            primary: string | null;
            secondary: string | null;
        }>;
        shortName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    }, {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    }>;
    mobile: z.ZodObject<{
        native: z.ZodNullable<z.ZodString>;
        universal: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        native: string | null;
        universal: string | null;
    }, {
        native: string | null;
        universal: string | null;
    }>;
    name: z.ZodString;
    rdns: z.ZodNullable<z.ZodString>;
    sdks: z.ZodArray<z.ZodString, "many">;
    slug: z.ZodString;
    supported_standards: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        standard_id: z.ZodNumber;
        standard_prefix: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }, {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }>, "many">>;
    updatedAt: z.ZodString;
    versions: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    app: {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    chains: string[];
    description: string | null;
    desktop: {
        native: string | null;
        universal: string | null;
    };
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    };
    mobile: {
        native: string | null;
        universal: string | null;
    };
    name: string;
    rdns: string | null;
    sdks: string[];
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}, {
    app: {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    chains: string[];
    description: string | null;
    desktop: {
        native: string | null;
        universal: string | null;
    };
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    };
    mobile: {
        native: string | null;
        universal: string | null;
    };
    name: string;
    rdns: string | null;
    sdks: string[];
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}>;
/**
 * Validates the walletconnect.json file to ensure it is in the correct format
 */
export declare const walletConnectSourceSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    app: z.ZodObject<{
        android: z.ZodNullable<z.ZodString>;
        browser: z.ZodNullable<z.ZodString>;
        chrome: z.ZodNullable<z.ZodString>;
        edge: z.ZodNullable<z.ZodString>;
        firefox: z.ZodNullable<z.ZodString>;
        ios: z.ZodNullable<z.ZodString>;
        linux: z.ZodNullable<z.ZodString>;
        mac: z.ZodNullable<z.ZodString>;
        opera: z.ZodNullable<z.ZodString>;
        safari: z.ZodNullable<z.ZodString>;
        windows: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    }, {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    }>;
    app_type: z.ZodString;
    category: z.ZodNullable<z.ZodString>;
    chains: z.ZodArray<z.ZodString, "many">;
    description: z.ZodNullable<z.ZodString>;
    desktop: z.ZodObject<{
        native: z.ZodNullable<z.ZodString>;
        universal: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        native: string | null;
        universal: string | null;
    }, {
        native: string | null;
        universal: string | null;
    }>;
    homepage: z.ZodString;
    id: z.ZodString;
    image_id: z.ZodString;
    image_url: z.ZodObject<{
        lg: z.ZodString;
        md: z.ZodString;
        sm: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        lg: string;
        md: string;
        sm: string;
    }, {
        lg: string;
        md: string;
        sm: string;
    }>;
    injected: z.ZodNullable<z.ZodArray<z.ZodObject<{
        injected_id: z.ZodString;
        namespace: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        injected_id: string;
        namespace: string;
    }, {
        injected_id: string;
        namespace: string;
    }>, "many">>;
    metadata: z.ZodObject<{
        colors: z.ZodObject<{
            primary: z.ZodNullable<z.ZodString>;
            secondary: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            primary: string | null;
            secondary: string | null;
        }, {
            primary: string | null;
            secondary: string | null;
        }>;
        shortName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    }, {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    }>;
    mobile: z.ZodObject<{
        native: z.ZodNullable<z.ZodString>;
        universal: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        native: string | null;
        universal: string | null;
    }, {
        native: string | null;
        universal: string | null;
    }>;
    name: z.ZodString;
    rdns: z.ZodNullable<z.ZodString>;
    sdks: z.ZodArray<z.ZodString, "many">;
    slug: z.ZodString;
    supported_standards: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        standard_id: z.ZodNumber;
        standard_prefix: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }, {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }>, "many">>;
    updatedAt: z.ZodString;
    versions: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    app: {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    chains: string[];
    description: string | null;
    desktop: {
        native: string | null;
        universal: string | null;
    };
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    };
    mobile: {
        native: string | null;
        universal: string | null;
    };
    name: string;
    rdns: string | null;
    sdks: string[];
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}, {
    app: {
        android: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        ios: string | null;
        linux: string | null;
        mac: string | null;
        opera: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    chains: string[];
    description: string | null;
    desktop: {
        native: string | null;
        universal: string | null;
    };
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        colors: {
            primary: string | null;
            secondary: string | null;
        };
        shortName: string | null;
    };
    mobile: {
        native: string | null;
        universal: string | null;
    };
    name: string;
    rdns: string | null;
    sdks: string[];
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}>>;
export type WalletConnectSourceSchema = z.infer<typeof walletConnectSourceSchema>;
export type WalletConnectSourceValueSchema = z.infer<typeof walletConnectSourceValueSchema>;
