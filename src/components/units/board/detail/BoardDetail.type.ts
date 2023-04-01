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
  onClickMoveToPage: (path: string) => () => void;
  onClickDelete: () => void;
}
