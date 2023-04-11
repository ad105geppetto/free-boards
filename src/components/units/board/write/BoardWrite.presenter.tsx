import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import Modal02 from "../../../commons/modals/modal02";
import HeadMeta from "../../../commons/meta";
import Link from "next/link";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title={`자유게시판 | ${
          props.isEdit
            ? "수정이 필요한 글, 수정"
            : "다양한 회원들과 소통하는 곳, 등록"
        }페이지`}
        description={
          props.isEdit
            ? "자유게시판의 수정페이지에서는 회원 여러분들이 작성하신 글을 손쉽게 수정하실 수 있습니다. 제목과 내용을 자유롭게 수정하실 수 있으며, 수정 후에는 다시 저장하여 적용할 수 있습니다. 자신이 작성한 글이 부족한 점이나 수정이 필요한 부분이 있을 때는 언제든지 자유롭게 수정하실 수 있습니다. 회원들끼리 소통하고 정보를 나누는 자유게시판에서, 보다 나은 글을 작성하기 위해 수정 기능을 적극적으로 활용해보세요."
            : "자유게시판의 등록페이지에서는 회원 여러분들이 자유롭게 글을 작성하실 수 있습니다. 다양한 주제의 글들이 환영되며, 회원가입 후 간단한 양식을 작성하시면 바로 글을 작성하실 수 있습니다. 게시글의 제목과 내용을 자유롭게 작성하여, 다른 회원들과 자신의 생각과 이야기를 공유해보세요. 모두가 함께 소통하고 즐길 수 있는 자유로운 공간, 바로 자유게시판입니다."
        }
      />
      {props.isOpen && (
        <Modal02 errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.WritingHeader>
          <S.BoardWriteTitle>
            게시글 {props.isEdit ? "수정" : "등록"}
          </S.BoardWriteTitle>
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
