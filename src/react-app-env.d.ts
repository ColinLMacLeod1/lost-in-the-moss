/// <reference types="react-scripts" />

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };


interface img {
    src: string;
    alt: string;
  }