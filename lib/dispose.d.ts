export interface IDisposable {
    dispose(): void;
}
export declare class DisposableStore<T extends IDisposable> implements IDisposable {
    private _toDispose;
    private _isDisposed;
    add(disposable: T): T;
    clear(): void;
    dispose(): void;
}
export declare abstract class Disposable implements IDisposable {
    protected readonly _store: DisposableStore<IDisposable>;
    dispose(): void;
    protected register<T extends IDisposable>(disposables: T | T[]): void;
}
