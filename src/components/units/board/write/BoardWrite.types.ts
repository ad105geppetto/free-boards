import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  writer: string;
  title: string;
  contents: string;
  boardId: string;
  isOpen: boolean;
  errorMessage: string;
  placeHolderWriter: string;
  placeHolderPassword: string;
  placeHolderTitle: string;
  placeHolderContents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClose: () => void;
}
