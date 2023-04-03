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
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import BoardWriteUI from "./BoardWrite.presenter";
import { useModalErrorState } from "../../../commons/hooks/useModalErrorState";

export default function BoardWrite(props: IBoardWriteProps) {
  const { currentPath, onClickMoveToPage } = useMoveToPage();
  const [type, boardId] = currentPath.split("/").slice(1);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [placeHolderWriter, setPlaceHolderWriter] =
    useState("작성자명을 입력해주세요.");
  const [placeHolderPassword, setPlaceHolderPassword] =
    useState("비밀번호를 입력해주세요.");
  const [placeHolderTitle, setPlaceHolderTitle] =
    useState("제목을 입력해주세요.");
  const [placeHolderContents, setPlaceHolderContents] =
    useState("내용을 입력해주세요.");
  const { errorMessage, setErrorMessage, isOpen, onClose } =
    useModalErrorState();

  useEffect(() => {
    if (window.innerWidth <= 1156) {
      setPlaceHolderWriter("작성자명");
      setPlaceHolderPassword("비밀번호");
      setPlaceHolderTitle("제목");
      setPlaceHolderContents("내용");
    }

    if (!props.isEdit) return;
    let cancelled = false;

    async function fetchBoard() {
      const docRef = doc(getFirestore(firebaseApp), type, boardId);
      const docSnap = await getDoc(docRef);

      if (!cancelled) {
        if (docSnap.exists()) {
          const { writer, title, contents } = docSnap.data();
          setWriter(writer);
          setTitle(title);
          setContents(contents);
        } else {
          setErrorMessage("잘못된 요청입니다.");
          onClose();
        }
      }
    }
    void fetchBoard();

    return () => {
      cancelled = true;
    };
  }, []);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 8) {
      setErrorMessage("작성자명은 8자 이하입니다.");
      onClose();
      return;
    }
    if (event.target.value[0] === " ") {
      setErrorMessage("첫글자는 공백이 불가합니다.");
      onClose();
      return;
    }
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 12) {
      setErrorMessage("비밀번호는 6~12자 입니다.");
      onClose();
      return;
    }
    if (event.target.value.includes(" ")) {
      setErrorMessage("비밀번호는 공백이 불가합니다.");
      onClose();
      return;
    }
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 20) {
      setErrorMessage("제목은 최대 20자 입니다.");
      onClose();
      return;
    }
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 200) {
      setErrorMessage("내용은 최대 200자 입니다.");
      onClose();
      return;
    }
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const collectionId = currentPath.split("/")[1];
    const board = collection(getFirestore(firebaseApp), collectionId);

    const trimmedTitleText = title.trim();

    if (!writer) {
      setErrorMessage("작성자명을 작성해주세요.");
      onClose();
      return;
    }
    if (!password) {
      setErrorMessage("비밀번호를 작성해주세요.");
      onClose();
      return;
    }
    if (!trimmedTitleText) {
      setErrorMessage("제목을 작성해주세요.");
      onClose();
      return;
    }
    if (!contents) {
      setErrorMessage("내용을 작성해주세요.");
      onClose();
      return;
    }

    try {
      await addDoc(board, {
        writer,
        password,
        title: trimmedTitleText,
        contents,
        createdAt: getDate(),
        deletedAt: false,
        date: new Date(),
      });

      onClickMoveToPage(`/${collectionId}`)();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage("잘못된 요청입니다.");
        onClose();
      }
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
      if (error instanceof Error) {
        setErrorMessage("잘못된 요청입니다.");
        onClose();
      }
    }
  };

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      writer={writer}
      title={title}
      contents={contents}
      isOpen={isOpen}
      errorMessage={errorMessage}
      placeHolderWriter={placeHolderWriter}
      placeHolderPassword={placeHolderPassword}
      placeHolderTitle={placeHolderTitle}
      placeHolderContents={placeHolderContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClose={onClose}
    />
  );
}
