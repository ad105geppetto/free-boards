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
import { Board } from "./BoardList.types";
import { useModalErrorState } from "../../../commons/hooks/useModalErrorState";
import useFetchBoardsOnMount from "../../../commons/hooks/useFetchBoardsOnMount";

export default function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [currentTopNumber, setCurrentTopNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const { errorMessage, setErrorMessage, isOpen, onClose } =
    useModalErrorState();

  useFetchBoardsOnMount({
    currentPath,
    setBoards,
    setCurrentTopNumber,
    setLastPage,
    setErrorMessage,
    onClose,
  });

  const onClickPrevButton = async () => {
    if (currentPage <= 1) return;

    const type = currentPath.slice(1);

    try {
      const docRef = query(
        collection(getFirestore(firebaseApp), type),
        where("deletedAt", "==", false),
        orderBy("date", "desc"),
        endBefore(boards[0].date),
        limitToLast(10)
      );

      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoards(() => datas);
        setCurrentPage((prev) => prev - 1);
        setCurrentTopNumber((prev) => prev + 10);
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
    if (currentPage >= lastPage) return;

    const type = currentPath.slice(1);

    try {
      const docRef = query(
        collection(getFirestore(firebaseApp), type),
        where("deletedAt", "==", false),
        orderBy("date", "desc"),
        startAfter(boards[boards.length - 1].date),
        limit(10)
      );

      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoards(() => datas);
        setCurrentPage((prev) => prev + 1);
        setCurrentTopNumber((prev) => prev - 10);
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
      boards={boards}
      pathname={currentPath}
      currentTopNumber={currentTopNumber}
      lastPage={lastPage}
      isOpen={isOpen}
      errorMessage={errorMessage}
      onClose={onClose}
      onClickMoveToPage={onClickMoveToPage}
      onClickNextButton={onClickNextButton}
      onClickPrevButton={onClickPrevButton}
    />
  );
}
