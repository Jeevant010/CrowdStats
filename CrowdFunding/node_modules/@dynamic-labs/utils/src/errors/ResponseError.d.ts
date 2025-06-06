import { CustomError } from './CustomError';
type ResponseErrorProps = {
    message?: string;
    cause: Response;
    jsonData?: unknown;
};
export declare class ResponseError<T> extends CustomError {
    jsonData: unknown;
    response: Response;
    cause: Response;
    constructor({ message, cause, jsonData }: ResponseErrorProps);
    get json(): Partial<T>;
    static fromResponse<T>({ cause, message, }: Omit<ResponseErrorProps, 'jsonData'>): Promise<ResponseError<T>>;
}
export {};
