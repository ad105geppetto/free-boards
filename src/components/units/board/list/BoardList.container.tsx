import BoardListUI from "./BoardList.presenter";
import {
  getCountFromServer,
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
import { useState, useEffect } from "react";
import { Board } from "./BoardList.types";
import { useRouter } from "next/router";

export default function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [currentTopNumber, setCurrentTopNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    async function fetchBoards() {
      const type = router.asPath.slice(1);
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

      try {
        const docSnaps = await getDocs(docRef);
        const docSnapCount = await getCountFromServer(docCountRef);

        const datas = docSnaps.docs.map((el) => ({ id: el.id, ...el.data() }));
        const totalCount = docSnapCount.data().count;

        if (datas) {
          setBoards(datas);
          setCurrentTopNumber(totalCount);
          setLastPage(Math.ceil(totalCount / 10));
          return;
        }
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }

    void fetchBoards();
  }, []);

  const onClickPrevButton = async () => {
    if (currentPage <= 1) return;

    const type = currentPath.slice(1);
    const docRef = query(
      collection(getFirestore(firebaseApp), type),
      where("deletedAt", "==", false),
      orderBy("date", "desc"),
      endBefore(boards[0].date),
      limitToLast(10)
    );

    try {
      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoards(() => datas);
        setCurrentPage((prev) => prev - 1);
        setCurrentTopNumber((prev) => prev + 10);
        return;
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickNextButton = async () => {
    if (currentPage >= lastPage) return;

    const type = currentPath.slice(1);
    const docRef = query(
      collection(getFirestore(firebaseApp), type),
      where("deletedAt", "==", false),
      orderBy("date", "desc"),
      startAfter(boards[boards.length - 1].date),
      limit(10)
    );

    try {
      const result = await getDocs(docRef);
      const datas = result.docs.map((el) => ({ id: el.id, ...el.data() }));

      if (datas) {
        setBoards(() => datas);
        setCurrentPage((prev) => prev + 1);
        setCurrentTopNumber((prev) => prev - 10);
        return;
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return (
    <BoardListUI
      boards={boards}
      pathname={currentPath}
      currentTopNumber={currentTopNumber}
      lastPage={lastPage}
      onClickMoveToPage={onClickMoveToPage}
      onClickNextButton={onClickNextButton}
      onClickPrevButton={onClickPrevButton}
    />
  );
}
