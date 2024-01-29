import {
  IIOCClientPort,
  TDependencyContainer,
  TDependencyModule,
} from "../../domain";
import { IOCClientService } from "../../application/IOCClientService";
import { iocConfig } from "../ioc.config";

export class IOCClientPort implements IIOCClientPort {
  private static instance: IOCClientPort;
  private readonly iocClientService: IOCClientService;

  public readonly composeContainer = (...args: Array<TDependencyModule>) => {
    return this.iocClientService.composeContainer(...args);
  };

  public readonly mergeContainers = (args: Array<TDependencyContainer>) => {
    return this.iocClientService.mergeContainers(args);
  };

  public static readonly getInstance = (): IIOCClientPort => {
    if (!IOCClientPort.instance) {
      IOCClientPort.instance = new IOCClientPort(iocConfig);
    }
    return IOCClientPort.instance;
  };

  private constructor(
    private readonly dependencyContainer: TDependencyContainer,
  ) {
    this.iocClientService = this.dependencyContainer.get(IOCClientService);
  }
}
