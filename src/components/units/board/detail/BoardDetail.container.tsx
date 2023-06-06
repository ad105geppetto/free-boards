import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useModalErrorState } from "../../../commons/hooks/useModalErrorState";

export default function BoardDetail(props: any) {
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const [type] = currentPath.split("/").slice(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { errorMessage, setErrorMessage, isOpen, onClose } =
    useModalErrorState();

  const handleDelete = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const handleEdit = () => {
    setIsUpdateModalOpen((prev) => !prev);
  };

  return (
    <BoardDetailUI
      type={type}
      board={props.board}
      isOpen={isOpen}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      isDeleteModalOpen={isDeleteModalOpen}
      isUpdateModalOpen={isUpdateModalOpen}
      onClickMoveToPage={onClickMoveToPage}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      onClose={onClose}
    />
  );
}
