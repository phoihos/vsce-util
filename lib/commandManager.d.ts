import { IDisposable, DisposableStore } from './dispose';
export interface ICommand {
    readonly id: string;
    execute(...args: any[]): void | PromiseLike<void>;
}
export declare class CommandManager extends DisposableStore<IDisposable> {
    private readonly _commandIds;
    dispose(): void;
    register<T extends ICommand>(command: T): T;
    private _registerCommand;
}
