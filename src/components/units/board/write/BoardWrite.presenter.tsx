import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import Modal02 from "../../../commons/modals/modal02";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Container>
      {props.isOpen && (
        <Modal02 errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.WritingHeader>
          <S.BoardWriteTitle>
            게시글 {props.isEdit ? "수정" : "등록"}
          </S.BoardWriteTitle>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.WritingHeader>
        {props.isEdit ? (
          ""
        ) : (
          <S.UserInfoWrapper>
            <S.Writer
              onChange={props.onChangeWriter}
              type="text"
              placeholder={props.placeHolderWriter}
              value={props.writer}
            />
            <S.Password
              onChange={props.onChangePassword}
              type="password"
              placeholder={props.placeHolderPassword}
              autoComplete="off"
            />
          </S.UserInfoWrapper>
        )}
        <S.Title
          onChange={props.onChangeTitle}
          type="text"
          placeholder={props.placeHolderTitle}
          value={props.title}
        />
        <S.Contents
          onChange={props.onChangeContents}
          type="text"
          placeholder={props.placeHolderContents}
          value={props.contents}
        />
      </S.Wapper>
    </S.Container>
  );
}
