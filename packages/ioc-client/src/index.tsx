import { IOCClientPort } from "./infrastructure/ports/IOCClientServicePort";
import type { IIOCClientPort } from "./domain";

export type { interfaces as IIOCClient } from "inversify";
export type {
  TDependencyContainer,
  TDependencyModule,
  IIOCClientPort,
} from "./domain";

export { unmanaged, inject, injectable } from "inversify";
export const iocClient: IIOCClientPort = IOCClientPort.getInstance();
