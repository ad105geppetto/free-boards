import { Dispatch, SetStateAction } from "react";

export interface Board {
  writer: string;
  title: string;
  contents: string;
  password: string;
  createdAt: string;
}

export interface IBoardDetailUIProps {
  type: string;
  board: Board | null;
  isOpen: boolean;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  isDeleteModalOpen: boolean;
  isUpdateModalOpen: boolean;
  onClickMoveToPage: (path: string) => () => void;
  handleDelete: () => void;
  handleEdit: () => void;
  onClose: () => void;
}
