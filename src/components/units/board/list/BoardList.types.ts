import { DocumentData } from "firebase/firestore";

export interface IBoardListUIProps {
  boards: Board[];
  pathname: string;
  currentTopNumber: number;
  lastPage: number;
  isOpen: boolean;
  errorMessage: string;
  onClose: () => void;
  onClickMoveToPage: (path: string) => () => void;
  onClickNextButton: () => void;
  onClickPrevButton: () => void;
}

export interface Board extends DocumentData {
  id: string;
}

export interface BoardData {
  boards: Board[];
  totalCount: number;
  currentPage: number;
  lastPage: number;
}
