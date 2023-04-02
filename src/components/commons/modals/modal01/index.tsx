import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../../commons/firebase";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import Modal02 from "../modal02";
import * as S from "./modal01.styles";

interface IModal01Props {
  password: string | undefined;
  onClose: () => void;
}

export default function Modal01(props: IModal01Props) {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { currentPath, onClickMoveToPage } = useMoveToPage();

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    if (props.password !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    const [collectionId, fieldId] = currentPath.split("/").slice(1);
    const deletedBoard = doc(getFirestore(firebaseApp), collectionId, fieldId);

    try {
      await updateDoc(deletedBoard, {
        deletedAt: true,
      });

      onClickMoveToPage("/")();
      props.onClose();
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message);
    }
  };

  return (
    <S.ModalWrapper>
      {errorMessage && (
        <Modal02 errorMessage={errorMessage} onClose={props.onClose} />
      )}
      <S.Modal>
        <S.TitleWrapper>
          <S.ModalTitle>비밀번호 입력</S.ModalTitle>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.ModalContents>비밀번호를 입력해주세요.</S.ModalContents>
          <S.PasswordInput type="text" onChange={onChangePassword} />
        </S.ContentsWrapper>
        <S.SubmitWrapper>
          <S.Submit onClick={onClickDelete}>확인</S.Submit>
          <S.Submit onClick={props.onClose}>취소</S.Submit>
        </S.SubmitWrapper>
      </S.Modal>
    </S.ModalWrapper>
  );
}
