import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.type";
import Modal01 from "../../../commons/modals/modal01";
import Modal02 from "../../../commons/modals/modal02";
import Modal03 from "../../../commons/modals/modal03";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Container>
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
          <S.BoardListButton
            onClick={props.onClickMoveToPage(`/${props.type}`)}
          >
            목록
          </S.BoardListButton>
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
