import BoardListUI from "./BoardList.presenter";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,
  limitToLast,
  where,
} from "firebase/firestore";
import { firebaseApp } from "../../../../commons/firebase";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { BoardData } from "./BoardList.types";
import { useModalErrorState } from "../../../commons/hooks/useModalErrorState";
import useFetchBoardsOnMount from "../../../commons/hooks/useFetchBoardsOnMount";

export default function BoardList() {
  const [boardData, setBoardData] = useState<BoardData>({
    boards: [],
    totalCount: 0,
    currentPage: 1,
    lastPage: 1,
  });
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const { errorMessage, setErrorMessage, isOpen, onClose } =
    useModalErrorState();

  useFetchBoardsOnMount({
    currentPath,
    setBoardData,
    setErrorMessage,
    onClose,
  });
  console.log("hihi");
  const onClickPrevButton = async () => {
    if (boardData.currentPage <= 1) return;

    const type = currentPath.slice(1);

    try {
      const docRef = query(
        collection(getFirestore(firebaseApp), type),
        where("deletedAt", "==", false),
        orderBy("date", "desc"),
        endBefore(boardData.boards[0].date),
        limitToLast(10)
      );

      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoardData((prev) => ({
          ...prev,
          boards: datas,
          currentPage: prev.currentPage - 1,
          totalCount: prev.totalCount + 10,
        }));
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage("잘못된 요청입니다.");
        onClose();
      }
    }
  };

  const onClickNextButton = async () => {
    if (boardData.currentPage >= boardData.lastPage) return;

    const type = currentPath.slice(1);

    try {
      const docRef = query(
        collection(getFirestore(firebaseApp), type),
        where("deletedAt", "==", false),
        orderBy("date", "desc"),
        startAfter(boardData.boards[boardData.boards.length - 1].date),
        limit(10)
      );

      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoardData((prev) => ({
          ...prev,
          boards: datas,
          currentPage: prev.currentPage + 1,
          totalCount: prev.totalCount - 10,
        }));
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage("잘못된 요청입니다.");
        onClose();
      }
    }
  };

  return (
    <BoardListUI
      boards={boardData.boards}
      pathname={currentPath}
      currentTopNumber={boardData.totalCount}
      lastPage={boardData.lastPage}
      isOpen={isOpen}
      errorMessage={errorMessage}
      onClose={onClose}
      onClickMoveToPage={onClickMoveToPage}
      onClickNextButton={onClickNextButton}
      onClickPrevButton={onClickPrevButton}
    />
  );
}
