export interface DisposableLike {
    dispose(): void;
}
export declare class DisposableStore<T extends DisposableLike> implements DisposableLike {
    private _toDispose;
    private _isDisposed;
    add(disposable: T): T;
    clear(): void;
    dispose(): void;
}
export declare abstract class Disposable implements DisposableLike {
    protected readonly _store: DisposableStore<DisposableLike>;
    dispose(): void;
    protected register<T extends DisposableLike>(disposables: T | T[]): void;
}
