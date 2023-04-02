import { RefObject } from "react";

export interface ILandingUIProps {
  listRef: RefObject<HTMLUListElement>;
  imageListRef: RefObject<HTMLDivElement>;
}

export interface IListItemProps {
  itemUrl: string;
}
