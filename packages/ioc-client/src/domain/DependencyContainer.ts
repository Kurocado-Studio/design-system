import { Container } from "inversify";
import { TDependencyContainer, TDependencyModule } from "./types";

export abstract class DependencyContainer {
  public static readonly compose = (
    args: Array<TDependencyModule<unknown, Array<any>>>,
  ): TDependencyContainer => {
    const dependencyContainer: Container = new Container();

    dependencyContainer.bind(Container).toConstantValue(dependencyContainer);

    for (const dependencyModule of args) {
      dependencyContainer
        .bind(dependencyModule.class)
        .toSelf()
        .inSingletonScope();
    }

    return dependencyContainer;
  };
}
