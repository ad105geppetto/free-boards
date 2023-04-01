import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.type";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Container>
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
          <S.DeleteButton onClick={props.onClickDelete}>
            게시글 삭제하기
          </S.DeleteButton>
          <S.EditButton
            onClick={props.onClickMoveToPage(
              `/${props.type}/${props.boardId}/edit`
            )}
          >
            게시글 수정하기
          </S.EditButton>
        </S.ButtonWrapper>
      </S.Wapper>
    </S.Container>
  );
}
