import { Dispatch, SetStateAction } from "react";

export interface IErrorModalProps {
  errorMessage: string;
  onClose: () => void;
}

export interface ICheckModalProps {
  password: string | undefined;
  onClose: () => void;
  onCloseError: () => void;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  isEdit: boolean;
}

export interface IEditModalProps {
  password: string | undefined;
  onClose: () => void;
  onCloseError: () => void;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  isEdit: boolean;
}

export type ModalProps = IErrorModalProps | ICheckModalProps;
