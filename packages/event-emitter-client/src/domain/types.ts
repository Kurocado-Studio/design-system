import { MutableRefObject } from "react";
import {
  ICustomDomEventProps,
  IDefaultHTMLElement,
} from "@kurocado-studio/ui-core-config";
import { ClientEvent } from "./ClientEvent";
import { ClientEventEmitter } from "./ClientEventEmitter";

export interface IClientEventEmitter {
  on: TClientEventEmitterHandler;
  once: TClientEventEmitterHandler;
  off: TClientEventEmitterHandler;
  emit: TMainEventEmitter;
}

type TMainEventEmitter<T = ICustomDomEventProps, R = IDefaultHTMLElement> = (
  event: ClientEvent<T, string, R>,
) => Promise<void>;

type TClientEventEmitterHandler<
  T = ICustomDomEventProps,
  R = IDefaultHTMLElement,
> = (
  event: ClientEvent<T, string, R>,
  payload: TClientEventEmitterHandlerPayload<T, R>,
) => Promise<void>;

export type TClientEventEmitterHandlerPayload<
  T = ICustomDomEventProps,
  R = IDefaultHTMLElement,
> = {
  execute(payload: T, nodeReference: MutableRefObject<R>): Promise<void>;
};

export interface IEventEmitterFactory {
  composeEventEmitter: <T extends string>() => ClientEventEmitter<T>;
}
