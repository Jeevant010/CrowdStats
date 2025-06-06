import { IframeStamper } from '@turnkey/iframe-stamper';
import { TurnkeyClient } from '@turnkey/http';
export declare abstract class BaseTurnkeyHandler {
    __turnkeyClient: TurnkeyClient | undefined;
    protected __iframeStamper: IframeStamper | undefined;
    protected __publicKey: string | undefined | null;
    get client(): TurnkeyClient | undefined;
    get publicKey(): string | null | undefined;
    clear(): void;
}
