import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import { doc, getFirestore, getDoc, collection } from "firebase/firestore";
import { firebaseApp } from "../../../src/commons/firebase";

interface CustomContext {
  query: {
    boardId: string;
  };
}

export default function FreeBoardsDeatilPage(props: any) {
  return <BoardDetail board={props.board} />;
}

export const getServerSideProps = async (context: CustomContext) => {
  const boardId = context.query.boardId;
  const docRef = doc(
    collection(getFirestore(firebaseApp), "free-boards"),
    boardId
  );
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { writer, title, contents, password, createdAt } = docSnap.data();
    return {
      props: {
        board: { writer, title, contents, password, createdAt },
      },
    };
  } else {
    return {
      props: { message: "잘못된 요청입니다." },
    };
  }
};
