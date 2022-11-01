import { DisposableLike, DisposableStore } from './dispose';
export interface Command {
    readonly id: string;
    execute(...args: any[]): void | PromiseLike<void>;
}
export declare class CommandManager extends DisposableStore<DisposableLike> {
    private readonly _commandIds;
    dispose(): void;
    register<T extends Command>(command: T): T;
    private _registerCommand;
}
