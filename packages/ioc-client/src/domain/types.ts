import { interfaces } from "inversify";
import { TClassConstructor } from "@kurocado-studio/ui-core-config";

export type TDependencyModule<
  T = unknown,
  K extends Array<unknown> = Array<unknown>,
> = T extends InstanceType<{
  new (): T;
}>
  ? {
      symbol: symbol;
      class: TClassConstructor<T, K>;
    }
  : never;

export interface IDependencyContainerComposer {
  composeDependencyContainer: (
    ...args: Array<TDependencyModule>
  ) => TDependencyContainer;
  mergeContainers: (
    dependencyContainers: Array<TDependencyContainer>,
  ) => TDependencyContainer;
}

export interface IIOCClient {
  composeContainer: (...args: Array<TDependencyModule>) => TDependencyContainer;
  mergeContainers: (args: Array<TDependencyContainer>) => TDependencyContainer;
}

export interface IIOCClientPort {
  composeContainer: IIOCClient["composeContainer"];
  mergeContainers: IIOCClient["mergeContainers"];
}

export type TDependencyContainer = interfaces.Container;
