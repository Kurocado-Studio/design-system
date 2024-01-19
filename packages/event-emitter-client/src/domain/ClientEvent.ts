import { MutableRefObject } from "react";
import { IDefaultHTMLElement } from "@kurocado-studio/ui-core-config";

export abstract class ClientEvent<
  T,
  K extends string = string,
  R = IDefaultHTMLElement,
> extends CustomEvent<T> {
  public abstract readonly name: K;
  public abstract readonly targetRef: MutableRefObject<R>;
}
