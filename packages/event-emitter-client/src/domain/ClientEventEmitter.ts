import {
  IDefaultHTMLElement,
  ICustomDomEventProps,
} from "@kurocado-studio/ui-core-config";
import {
  IClientEventEmitter,
  TClientEventEmitterHandlerPayload,
} from "./types";
import { ClientEvent } from "./ClientEvent";
import EventEmitter from "eventemitter3";

export abstract class ClientEventEmitter<X extends string>
  implements IClientEventEmitter
{
  public abstract on<
    T = ICustomDomEventProps,
    B extends string = X,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, B, R>,
    payload: TClientEventEmitterHandlerPayload<T, R>,
  ): Promise<void>;

  public abstract once<
    T = ICustomDomEventProps,
    B extends string = X,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, B, R>,
    payload: TClientEventEmitterHandlerPayload<T, R>,
  ): Promise<void>;

  public abstract off<
    T = ICustomDomEventProps,
    B extends string = X,
    R = IDefaultHTMLElement,
  >(
    event: ClientEvent<T, B, R>,
    payload: TClientEventEmitterHandlerPayload<T, R>,
  ): Promise<void>;

  public abstract emit<T = ICustomDomEventProps, R = IDefaultHTMLElement>(
    event: ClientEvent<T, string, R>,
  ): Promise<void>;

  protected readonly eventEmitter: EventEmitter = new EventEmitter();
}
