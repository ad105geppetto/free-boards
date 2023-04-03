import {
  getCountFromServer,
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect } from "react";
import { firebaseApp } from "../../../commons/firebase";
import { Board } from "../../units/board/list/BoardList.types";

interface IProps {
  currentPath: string;
  setBoards: Dispatch<SetStateAction<Board[]>>;
  setCurrentTopNumber: Dispatch<SetStateAction<number>>;
  setLastPage: Dispatch<SetStateAction<number>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  onClose: () => void;
}

export default function useFetchBoardsOnMount(props: IProps) {
  useEffect(() => {
    async function fetchBoards() {
      const type = props.currentPath.slice(1);

      try {
        const docRef = query(
          collection(getFirestore(firebaseApp), type),
          where("deletedAt", "==", false),
          orderBy("date", "desc"),
          limit(10)
        );
        const docCountRef = query(
          collection(getFirestore(firebaseApp), type),
          where("deletedAt", "==", false)
        );

        const docSnaps = await getDocs(docRef);
        const docSnapCount = await getCountFromServer(docCountRef);

        const datas = docSnaps.docs.map((el) => ({ id: el.id, ...el.data() }));
        const totalCount = docSnapCount.data().count;

        if (datas) {
          props.setBoards(datas);
          props.setCurrentTopNumber(totalCount);
          props.setLastPage(Math.ceil(totalCount / 10));
          return;
        }
      } catch (error) {
        if (error instanceof Error) {
          props.setErrorMessage("잘못된 요청입니다.");
          props.onClose();
        }
      }
    }

    void fetchBoards();
  }, []);
}
