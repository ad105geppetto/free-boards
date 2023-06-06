import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import HeadMeta from "../../../commons/meta";
import Link from "next/link";
import Modal from "../../../commons/modal";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title={`${
          props.isEdit
            ? "수정이 필요한 글, 수정"
            : "다양한 회원들과 소통하는 곳, 등록"
        }페이지 - UNION`}
        description={
          props.isEdit
            ? "자유게시판의 수정페이지에서는 여러분들이 작성하신 글을 손쉽게 수정하실 수 있습니다. 제목과 내용을 자유롭게 수정하실 수 있으며, 수정 후에는 다시 저장하여 적용할 수 있습니다."
            : "자유게시판의 등록페이지에서는 여러분들이 자유롭게 글을 작성하실 수 있습니다. 모두가 함께 소통하고 즐길 수 있는 자유로운 공간, 바로 자유게시판입니다."
        }
        ogDescription={
          props.isEdit
            ? "자유게시판의 수정페이지에서는 여러분들이 작성하신 글을 손쉽게 수정하실 수 있습니다. 제목과 내용을 자유롭게 수정하실 수 있으며, 수정 후에는 다시 저장하여 적용할 수 있습니다."
            : "자유게시판의 등록페이지에서는 여러분들이 자유롭게 글을 작성하실 수 있습니다. 모두가 함께 소통하고 즐길 수 있는 자유로운 공간, 바로 자유게시판입니다."
        }
      />
      {props.isOpen && (
        <Modal errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.BoardWriteTitle>
          게시글 {props.isEdit ? "수정" : "등록"}
        </S.BoardWriteTitle>
        {props.isEdit ? (
          ""
        ) : (
          <S.UserInfoWrapper>
            <S.Writer
              onChange={props.onChangeWriter}
              type="text"
              placeholder={props.placeHolderWriter}
              value={props.writer}
              aria-label="작성자명"
            />
            <S.Password
              onChange={props.onChangePassword}
              type="password"
              placeholder={props.placeHolderPassword}
              autoComplete="off"
              aria-label="비밀번호"
            />
          </S.UserInfoWrapper>
        )}
        <S.Title
          onChange={props.onChangeTitle}
          type="text"
          placeholder={props.placeHolderTitle}
          value={props.title}
          aria-label="제목"
        />
        <S.Contents
          onChange={props.onChangeContents}
          type="text"
          placeholder={props.placeHolderContents}
          value={props.contents}
          aria-label="내용"
        />
        <Link
          href={`/free-boards/${
            props.isEdit ? `${props.boardId}/edit` : "new"
          }`}
          passHref
        >
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </Link>
      </S.Wapper>
    </S.Container>
  );
}
