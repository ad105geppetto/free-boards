import BoardDetailUI from "./BoardDetail.presenter";
import { doc, getFirestore, getDoc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/firebase";
import { useState, useEffect } from "react";
import { Board } from "./BoardDetail.type";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function BoardDetail() {
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const [type, boardId] = currentPath.split("/").slice(1);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    async function fetchBoards() {
      const docRef = doc(getFirestore(firebaseApp), type, boardId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { writer, title, contents, password, createdAt } = docSnap.data();
        setBoard({ writer, title, contents, password, createdAt });
      } else {
        alert("잘못된 요청입니다.");
      }
    }

    void fetchBoards();
  }, []);

  const onClickDelete = async () => {
    const password = prompt("비밀번호를 입력해주세요.", "");

    if (password !== board?.password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const [collectionId, fieldId] = currentPath.split("/").slice(1);
    const deletedBoard = doc(getFirestore(firebaseApp), collectionId, fieldId);

    try {
      await updateDoc(deletedBoard, {
        deletedAt: true,
      });

      onClickMoveToPage("/")();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      type={type}
      board={board}
      boardId={boardId}
      onClickMoveToPage={onClickMoveToPage}
      onClickDelete={onClickDelete}
    />
  );
}
