import { ChangeEvent, useState } from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import Modal02 from "../modal02";
import * as S from "./modal03.styles";

interface IModal03Props {
  password: string | undefined;
  onClose: () => void;
}

export default function Modal03(props: IModal03Props) {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { currentPath, onClickMoveToPage } = useMoveToPage();

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickUpdate = async () => {
    if (props.password !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    onClickMoveToPage(`${currentPath}edit`)();
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
          <S.Submit onClick={onClickUpdate}>확인</S.Submit>
          <S.Submit onClick={props.onClose}>취소</S.Submit>
        </S.SubmitWrapper>
      </S.Modal>
    </S.ModalWrapper>
  );
}
