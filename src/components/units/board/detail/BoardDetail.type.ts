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
  boardId: string;
  isOpen: boolean;
  errorMessage: string;
  isDeleteModalOpen: boolean;
  isUpdateModalOpen: boolean;
  onClickMoveToPage: (path: string) => () => void;
  handleDelete: () => void;
  handleEdit: () => void;
  onClose: () => void;
}
