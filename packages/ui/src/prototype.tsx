import React, {MutableRefObject} from 'react'
import EventEmitter from 'eventemitter3'

interface ICustomDomEventProps {}

interface IDefaultHTMLElement extends HTMLElement {}

interface ICompoundElement {
    cssClient: IStyleClient
}

interface IStyleClient extends IClient {
    updateTheme(classNames?: string[]): string[]
}

interface IClient {
    classNames: string[] | undefined
    prependClassNames(classNames?: string[]): string[]
    appendClassNames(classNames?: string[]): string[]
    clearClassNames(): never[]
}

interface IClientEventEmitter {
    on: TIClientEventEmitterHandler
    once: TIClientEventEmitterHandler
    off: TIClientEventEmitterHandler
    emit: TMainEventEmitter
}

type TMainEventEmitter<T = ICustomDomEventProps, R = IDefaultHTMLElement> = (
    event: ClientEvent<T, string, R>,
) => Promise<void>

type TIClientEventEmitterHandler<
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
> = (
    event: ClientEvent<T, string, R>,
    payload: TIClientEventEmitterHandlerPayload<T, R>,
) => Promise<void>

type TIClientEventEmitterHandlerPayload<
    T = ICustomDomEventProps,
    R = IDefaultHTMLElement,
> = {
    execute(payload: T, nodeReference: MutableRefObject<R>): Promise<void>
}

type TCSSClientEventPayload = {
    name: number
    lastName: string
}

type TCSSClientEventManifest = {
    [CSSClientEventEnum.EVENT_NAME]: string
}

enum CSSClientEventEnum {
    EVENT_NAME = 'EVENT_NAME',
}

abstract class ClientEventEmitter<X extends string>
    implements IClientEventEmitter
{
    public abstract on<
        T = ICustomDomEventProps,
        B extends string = X,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, B, R>,
        payload: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void>

    public abstract once<
        T = ICustomDomEventProps,
        B extends string = X,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, B, R>,
        payload: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void>

    public abstract off<
        T = ICustomDomEventProps,
        B extends string = X,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, B, R>,
        payload: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void>

    public abstract emit<T = ICustomDomEventProps, R = IDefaultHTMLElement>(
        event: ClientEvent<T, string, R>,
    ): Promise<void>

    protected readonly eventEmitter: EventEmitter = new EventEmitter()
}

abstract class ClientEvent<
    T,
    K extends string = string,
    R = IDefaultHTMLElement,
> extends CustomEvent<T> {
    public abstract readonly name: K
    public abstract readonly targetRef: MutableRefObject<R>
}

abstract class HtmlElement {
    public abstract readonly render: React.FC
    public abstract readonly cssClient: IStyleClient
}

class CSSClientEvent extends ClientEvent<
    TCSSClientEventPayload,
    keyof TCSSClientEventManifest
> {
    public readonly targetRef: MutableRefObject<IDefaultHTMLElement>
    public readonly name: keyof TCSSClientEventManifest
    public static create = (
        name: CSSClientEventEnum,
        eventPayload: TCSSClientEventPayload,
        targetRef: MutableRefObject<IDefaultHTMLElement>,
    ): ClientEvent<TCSSClientEventPayload, keyof TCSSClientEventManifest> => {
        return new CSSClientEvent(name, eventPayload, targetRef)
    }

    private constructor(
        name: CSSClientEventEnum,
        eventPayload: TCSSClientEventPayload,
        targetRef: MutableRefObject<IDefaultHTMLElement>,
    ) {
        super(name, {detail: eventPayload})
        this.name = name
        this.targetRef = targetRef
    }
}

class HtmlElementFactory {
    public readonly createHtmlElement = (payload: HtmlElement): HtmlElement => {
        payload.cssClient.clearClassNames()

        abstract class CompoundHtmlElement
            extends HtmlElement
            implements ICompoundElement
        {
            cssClient = payload.cssClient
            render = payload.render
        }

        return new (class extends CompoundHtmlElement {})()
    }

    public readonly createHtml = async (payload: {
        htmlNode: HtmlElement
        test: ClientEventEmitter<keyof TCSSClientEventManifest>
    }): Promise<void> => {
        const cssClientEvent: ClientEvent<
            TCSSClientEventPayload,
            keyof TCSSClientEventManifest
        > = CSSClientEvent.create(
            CSSClientEventEnum.EVENT_NAME,
            {name: 2, lastName: ''},
            {
                current: {},
            } as unknown as MutableRefObject<IDefaultHTMLElement>,
        )

        await payload.test.emit(cssClientEvent)
    }

    public static create = (): HtmlElementFactory => {
        return new HtmlElementFactory()
    }
}

class MainClientEventEmitter extends ClientEventEmitter<string> {
    public readonly on = async <
        T = ICustomDomEventProps,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, string, R>,
        executor: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void> => {
        this.eventEmitter.on(event.name, this.handleEmittedEvent<T, R>(executor))
    }

    public readonly once = async <
        T = ICustomDomEventProps,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, string, R>,
        executor: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void> => {
        this.eventEmitter.once(event.name, this.handleEmittedEvent<T, R>(executor))
    }

    public readonly off = async <
        T = ICustomDomEventProps,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, string, R>,
        executor: TIClientEventEmitterHandlerPayload<T, R>,
    ): Promise<void> => {
        this.eventEmitter.off(event.name, this.handleEmittedEvent<T, R>(executor))
    }

    public readonly emit = async <
        T = ICustomDomEventProps,
        R = IDefaultHTMLElement,
    >(
        event: ClientEvent<T, string, R>,
    ): Promise<void> => {
        this.eventEmitter.emit(event.name, event)
    }

    private handleEmittedEvent =
        <T = ICustomDomEventProps, R = IDefaultHTMLElement>(
            executor: TIClientEventEmitterHandlerPayload<T, R>,
        ) =>
            async (eventEmitted: ClientEvent<T, string, R>): Promise<void> => {
                await executor.execute(eventEmitted.detail, eventEmitted.targetRef)
            }
}
