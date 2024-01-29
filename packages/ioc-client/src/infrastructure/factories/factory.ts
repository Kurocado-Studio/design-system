import {
  IDependencyContainerComposer,
  TDependencyContainer,
  TDependencyModule,
} from "../../domain";
import { DependencyContainer } from "../../domain/DependencyContainer";
import { injectable, Container } from "inversify";

@injectable()
export class DependencyContainerComposer
  implements IDependencyContainerComposer
{
  composeDependencyContainer = (...args: Array<TDependencyModule>) => {
    return DependencyContainer.compose(args);
  };

  mergeContainers = (dependencyContainers: Array<TDependencyContainer>) => {
    switch (dependencyContainers.length) {
      case 0:
        return new Container();
      case 1:
        return dependencyContainers[0];
      default:
        return Container.merge(
          dependencyContainers[0],
          dependencyContainers[1],
          ...dependencyContainers,
        );
    }
  };
}
