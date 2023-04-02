import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { useState, useEffect, ChangeEvent } from "react";
import { firebaseApp } from "../../../../commons/firebase";
import { IBoardWriteProps } from "./BoardWrite.types";
import { getDate } from "../../../../commons/utility";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  const [type, boardId] = currentPath.split("/").slice(1);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    if (!props.isEdit) return;

    async function fetchBoards() {
      const docRef = doc(getFirestore(firebaseApp), type, boardId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { writer, title, contents } = docSnap.data();
        setWriter(writer);
        setTitle(title);
        setContents(contents);
      } else {
        alert("잘못된 요청입니다.");
      }
    }
    void fetchBoards();
  }, []);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  const onClickSubmit = async () => {
    const collectionId = currentPath.split("/")[1];
    const board = collection(getFirestore(firebaseApp), collectionId);

    if (!writer) {
      alert("작성자명을 작성해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 작성해주세요.");
      return;
    }
    if (!title) {
      alert("제목을 작성해주세요.");
      return;
    }
    if (!contents) {
      alert("내용을 작성해주세요.");
      return;
    }

    try {
      await addDoc(board, {
        writer,
        password,
        title,
        contents,
        createdAt: getDate(),
        deletedAt: false,
        date: new Date(),
      });

      onClickMoveToPage(`/${collectionId}`)();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    const [collectionId, fieldId] = currentPath.split("/").slice(1);
    const board = doc(getFirestore(firebaseApp), collectionId, fieldId);

    try {
      await updateDoc(board, {
        writer,
        title,
        contents,
      });

      onClickMoveToPage(`/${collectionId}`)();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      writer={writer}
      title={title}
      contents={contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
