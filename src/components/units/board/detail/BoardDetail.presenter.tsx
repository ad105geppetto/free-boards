import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.type";
import Modal01 from "../../../commons/modals/modal01";
import Modal02 from "../../../commons/modals/modal02";
import Modal03 from "../../../commons/modals/modal03";
import HeadMeta from "../../../commons/meta";
import Link from "next/link";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title="자유게시판 | 자유로운 대화와 공유, 상세페이지"
        description="자유게시판은 회원들이 자유롭게 글을 올리고 소통할 수 있는 공간입니다. 다양한 주제의 글들이 올라와 있어서 언제나 새로운 정보와 이야기를 만날 수 있습니다. 게시판의 규칙을 잘 지키면 누구나 쉽게 참여할 수 있으며, 모두가 함께 존중하고 즐길 수 있는 공간이 되기를 바랍니다."
      />
      {props.isDeleteModalOpen && (
        <Modal01
          password={props.board?.password}
          onClose={props.handleDelete}
        />
      )}
      {props.isUpdateModalOpen && (
        <Modal03 password={props.board?.password} onClose={props.handleEdit} />
      )}
      {props.isOpen && (
        <Modal02 errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.ArticleTop>
          <Link href={`/${props.type}`} passHref>
            <S.BoardListButton>목록</S.BoardListButton>
          </Link>
        </S.ArticleTop>
        <S.ArticleContentsBox>
          <S.ArticleHeader>
            <S.Title>{props.board?.title}</S.Title>
            <S.Writer>{props.board?.writer}</S.Writer>
            <S.CreatedAt>{props.board?.createdAt}</S.CreatedAt>
          </S.ArticleHeader>
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
