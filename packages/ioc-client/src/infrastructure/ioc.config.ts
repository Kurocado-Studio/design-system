import { DependencyContainer } from "../domain/DependencyContainer";
import { DependencyContainerComposer } from "./factories/factory";
import { IOCClientService } from "../application/IOCClientService";
import { TDependencyContainer } from "../domain";

export const iocConfig: TDependencyContainer = DependencyContainer.compose([
  {
    symbol: Symbol(DependencyContainerComposer.name),
    class: DependencyContainerComposer,
  },
  {
    symbol: Symbol(IOCClientService.name),
    class: IOCClientService,
  },
]);
