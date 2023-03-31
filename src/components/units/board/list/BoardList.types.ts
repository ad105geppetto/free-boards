import { DocumentData } from "firebase/firestore";

export interface IBoardListUIProps {
  boards: Board[];
  pathname: string;
  currentTopNumber: number;
  lastPage: number;
  onClickMoveToPage: (path: string) => () => void;
  onClickNextButton: () => void;
  onClickPrevButton: () => void;
}

export type TRoutes = Record<string, string>;

export interface Board extends DocumentData {
  id: string;
}
