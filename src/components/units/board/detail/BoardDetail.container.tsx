import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";
import { Board } from "./BoardDetail.type";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useModalErrorState } from "../../../commons/hooks/useModalErrorState";
import useFetchBoardOnMount from "../../../commons/hooks/useFetchBoardOnMount";

export default function BoardDetail() {
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const [type, boardId] = currentPath.split("/").slice(1);
  const [board, setBoard] = useState<Board | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { errorMessage, setErrorMessage, isOpen, onClose } =
    useModalErrorState();

  useFetchBoardOnMount({ type, boardId, setBoard, setErrorMessage, onClose });

  const handleDelete = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const handleEdit = () => {
    setIsUpdateModalOpen((prev) => !prev);
  };

  return (
    <BoardDetailUI
      type={type}
      board={board}
      boardId={boardId}
      isOpen={isOpen}
      errorMessage={errorMessage}
      isDeleteModalOpen={isDeleteModalOpen}
      isUpdateModalOpen={isUpdateModalOpen}
      onClickMoveToPage={onClickMoveToPage}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      onClose={onClose}
    />
  );
}
