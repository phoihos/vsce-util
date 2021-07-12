import { Disposable, DisposableStore } from './dispose';
export declare abstract class EventListenerBase extends Disposable {
}
export declare class AggregateEventListener extends DisposableStore<EventListenerBase> {
}
