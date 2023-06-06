import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.type";
import HeadMeta from "../../../commons/meta";
import Link from "next/link";
import Modal from "../../../commons/modal";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title={`${props.board?.title ?? "상세페이지"} - UNION`}
        description="자유게시판은 자유롭게 글을 올리고 소통할 수 있는 공간입니다. 다양한 주제의 글들이 올라와 있어서 언제나 새로운 정보와 이야기를 만날 수 있습니다."
        ogDescription="자유게시판은 자유롭게 글을 올리고 소통할 수 있는 공간입니다. 다양한 주제의 글들이 올라와 있어서 언제나 새로운 정보와 이야기를 만날 수 있습니다."
      />
      {props.isDeleteModalOpen && (
        <Modal
          password={props.board?.password}
          onClose={props.handleDelete}
          onCloseError={props.onClose}
          setErrorMessage={props.setErrorMessage}
          isEdit={false}
        />
      )}
      {props.isUpdateModalOpen && (
        <Modal
          password={props.board?.password}
          onClose={props.handleEdit}
          onCloseError={props.onClose}
          setErrorMessage={props.setErrorMessage}
          isEdit={true}
        />
      )}
      {props.isOpen && (
        <Modal errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.ArticleTop>
          <Link href={`/${props.type}`} passHref>
            <S.BoardListButton>목록</S.BoardListButton>
          </Link>
        </S.ArticleTop>
        <S.ArticleContentsBox>
          <S.Title>{props.board?.title}</S.Title>
          <S.Writer>{props.board?.writer}</S.Writer>
          <S.CreatedAt>{props.board?.createdAt}</S.CreatedAt>
          <S.Contents>{props.board?.contents}</S.Contents>
        </S.ArticleContentsBox>
        <S.ButtonWrapper>
          <S.DeleteButton onClick={props.handleDelete}>
            게시글 삭제하기
          </S.DeleteButton>
          <S.EditButton onClick={props.handleEdit}>
            게시글 수정하기
          </S.EditButton>
        </S.ButtonWrapper>
      </S.Wapper>
    </S.Container>
  );
}
