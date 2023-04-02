import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Container>
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
        <S.UserInfoWrapper>
          <S.Writer
            onChange={props.onChangeWriter}
            type="text"
            placeholder="작성자명을 입력해주세요."
            value={props.writer}
          />
          {props.isEdit ? (
            ""
          ) : (
            <S.Password
              onChange={props.onChangePassword}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="new-password"
            />
          )}
        </S.UserInfoWrapper>
        <S.Title
          onChange={props.onChangeTitle}
          type="text"
          placeholder="제목을 입력해주세요."
          value={props.title}
        />
        <S.Contents
          onChange={props.onChangeContents}
          type="text"
          placeholder="내용"
          value={props.contents}
        />
      </S.Wapper>
    </S.Container>
  );
}
