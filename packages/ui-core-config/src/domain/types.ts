export interface IDefaultHTMLElement extends HTMLElement {}
export interface ICustomDomEventProps {}

export type TClassConstructor<T, P extends Array<unknown> = Array<unknown>> = {
  new (...args: P): T;
};
