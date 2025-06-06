declare class ApiEndpoint {
    private static __baseUrl__;
    static getBaseUrl: () => string;
    static setBaseUrl: (baseUrlInput?: string) => void;
}
export default ApiEndpoint;
