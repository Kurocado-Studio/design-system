import {MutableRefObject} from 'react'
interface IDefaultHTMLElement extends HTMLElement {}

abstract class ClientEvent<
    T,
    K extends string = string,
    R = IDefaultHTMLElement,
> extends CustomEvent<T> {
    public abstract readonly name: K
    public abstract readonly targetRef: MutableRefObject<R>
}