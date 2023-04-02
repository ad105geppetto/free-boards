import { doc, getFirestore, getDoc } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect } from "react";
import { firebaseApp } from "../../../commons/firebase";
import { Board } from "../../units/board/detail/BoardDetail.type";

interface IProps {
  type: string;
  boardId: string;
  setBoard: Dispatch<SetStateAction<Board | null>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  onClose: () => void;
}

export default function useFetchBoardOnMount(props: IProps) {
  useEffect(() => {
    let cancelled = false;
    async function fetchBoard() {
      const docRef = doc(getFirestore(firebaseApp), props.type, props.boardId);
      const docSnap = await getDoc(docRef);

      if (!cancelled) {
        if (docSnap.exists()) {
          const { writer, title, contents, password, createdAt } =
            docSnap.data();
          props.setBoard({ writer, title, contents, password, createdAt });
        } else {
          props.setErrorMessage("잘못된 요청입니다.");
          props.onClose();
        }
      }
    }

    void fetchBoard();

    return () => {
      cancelled = true;
    };
  }, []);
}
