import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../commons/firebase";
import { useMoveToPage } from "../hooks/useMoveToPage";
import { ICheckModalProps, IErrorModalProps, ModalProps } from "./modal.types";
import Portal from "../portal";
import * as S from "./modal.styles";

export default function Modal(props: ModalProps) {
  const [password, setPassword] = useState("");
  const { currentPath, onClickMoveToPage } = useMoveToPage();

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    if ((props as ICheckModalProps).password !== password) {
      props.onClose();
      (props as ICheckModalProps).setErrorMessage(
        "비밀번호가 일치하지 않습니다."
      );
      (props as ICheckModalProps).onCloseError();
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
      if (error instanceof Error)
        (props as ICheckModalProps).setErrorMessage(error.message);
    }
  };

  const onClickUpdate = async () => {
    if ((props as ICheckModalProps).password !== password) {
      props.onClose();
      (props as ICheckModalProps).setErrorMessage(
        "비밀번호가 일치하지 않습니다."
      );
      (props as ICheckModalProps).onCloseError();
      return;
    }

    onClickMoveToPage(`${currentPath}edit`)();
  };

  return (
    <Portal
      selector={"errorMessage" in props ? "#error-modal" : "#check-modal"}
    >
      <S.ModalWrapper>
        <S.Modal
          role="dialog"
          aria-modal="true"
          aria-labelledby="TITLE_modal"
          aria-describedby="DESCRIPTION_modal"
        >
          <S.ModalTitle
            id="TITLE_modal"
            isError={(props as IErrorModalProps).errorMessage}
          >
            {"errorMessage" in props ? "에러 메시지" : "비밀번호 입력"}
          </S.ModalTitle>
          <S.ContentsWrapper>
            <S.ModalContents id="DESCRIPTION_modal">
              {(props as IErrorModalProps).errorMessage
                ? (props as IErrorModalProps).errorMessage
                : "비밀번호를 입력해주세요."}
            </S.ModalContents>
            {(props as IErrorModalProps).errorMessage ? (
              ""
            ) : (
              <S.PasswordInput
                type="text"
                onChange={onChangePassword}
                autoFocus
              />
            )}
          </S.ContentsWrapper>
          {"errorMessage" in props ? (
            <S.SubmitWrapper>
              <S.Submit onClick={props.onClose} autoFocus>
                확인
              </S.Submit>
            </S.SubmitWrapper>
          ) : (
            <S.SubmitWrapper>
              <S.CheckSubmit
                onClick={props.isEdit ? onClickUpdate : onClickDelete}
              >
                확인
              </S.CheckSubmit>
              <S.CheckSubmit onClick={props.onClose}>취소</S.CheckSubmit>
            </S.SubmitWrapper>
          )}
        </S.Modal>
      </S.ModalWrapper>
    </Portal>
  );
}
