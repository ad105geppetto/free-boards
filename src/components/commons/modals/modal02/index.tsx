import * as S from "./modal02.styles";

interface IModal02Props {
  errorMessage: string;
  onClose: () => void;
}

export default function Modal02(props: IModal02Props) {
  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.TitleWrapper>
          <S.ModalTitle>에러 메시지</S.ModalTitle>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.ModalContents>{props.errorMessage}</S.ModalContents>
        </S.ContentsWrapper>
        <S.SubmitWrapper>
          <S.Submit onClick={props.onClose}>확인</S.Submit>
        </S.SubmitWrapper>
      </S.Modal>
    </S.ModalWrapper>
  );
}
