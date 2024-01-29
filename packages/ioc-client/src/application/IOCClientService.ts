import { IIOCClient, TDependencyContainer, TDependencyModule } from "../domain";
import { inject, injectable } from "inversify";
import { DependencyContainerComposer } from "../infrastructure/factories/factory";

@injectable()
export class IOCClientService implements IIOCClient {
  constructor(
    @inject<DependencyContainerComposer>(DependencyContainerComposer)
    private readonly containerComposer: DependencyContainerComposer,
  ) {}

  public readonly composeContainer = (...args: Array<TDependencyModule>) => {
    return this.containerComposer.composeDependencyContainer(...args);
  };

  public readonly mergeContainers = (args: Array<TDependencyContainer>) => {
    return this.containerComposer.mergeContainers(args);
  };
}
