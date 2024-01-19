import { ClientEventEmitter } from "./ClientEventEmitter";
import { ClientEvent } from "./ClientEvent";
import { TClientEventEmitterHandlerPayload } from "./types";
import {
  ICustomDomEventProps,
  IDefaultHTMLElement,
} from "@kurocado-studio/ui-core-config";

export class ClientEventEmitterHandler extends ClientEventEmitter<string> {
  public readonly on = async <
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, string, R>,
    executor: TClientEventEmitterHandlerPayload<T, R>,
  ) => {
    this.eventEmitter.on(event.name, this.handleEmittedEvent<T, R>(executor));
  };

  public readonly once = async <
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, string, R>,
    executor: TClientEventEmitterHandlerPayload<T, R>,
  ): Promise<void> => {
    this.eventEmitter.once(event.name, this.handleEmittedEvent<T, R>(executor));
  };

  public readonly off = async <
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, string, R>,
    executor: TClientEventEmitterHandlerPayload<T, R>,
  ): Promise<void> => {
    this.eventEmitter.off(event.name, this.handleEmittedEvent<T, R>(executor));
  };

  public readonly emit = async <
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, string, R>,
  ): Promise<void> => {
    this.eventEmitter.emit(event.name, event);
  };

  public static readonly create = <
    T extends string,
  >(): ClientEventEmitter<T> => {
    return new ClientEventEmitterHandler();
  };

  private handleEmittedEvent =
    <T = ICustomDomEventProps, R = IDefaultHTMLElement>(
      executor: TClientEventEmitterHandlerPayload<T, R>,
    ) =>
    async (eventEmitted: ClientEvent<T, string, R>): Promise<void> => {
      await executor.execute(eventEmitted.detail, eventEmitted.targetRef);
    };
}
