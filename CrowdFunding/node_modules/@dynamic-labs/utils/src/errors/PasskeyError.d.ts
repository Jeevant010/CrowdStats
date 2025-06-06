export type PasskeyError = {
    cause?: {
        code: number;
        name: string;
        message: string;
    };
    code?: number;
};
