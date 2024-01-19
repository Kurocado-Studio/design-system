import { ClientEventEmitter } from "../domain/ClientEventEmitter";
import { ClientEventEmitterHandler } from "../domain/ClientEventEmitterHandler";
import { IEventEmitterFactory } from "../domain/types";

export class EventEmitterFactory implements IEventEmitterFactory {
  public readonly composeEventEmitter = <
    T extends string,
  >(): ClientEventEmitter<T> => {
    return ClientEventEmitterHandler.create<T>();
  };
}
