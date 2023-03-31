import { Board, IBoardListUIProps, TRoutes } from "./BoardList.types";
import * as S from "./BoardList.styles";

const routes: TRoutes = {
  "/free-boards": "자유게시판",
};

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Container>
      <S.Wapper>
        <S.BoardTitle>{routes[props.pathname]}</S.BoardTitle>
        <S.BoardTable>
          <S.BoardHeader>
            <S.Number>번호</S.Number>
            <S.Title>제목</S.Title>
            <S.Writer>작성자</S.Writer>
          </S.BoardHeader>
          {props.boards.map((board: Board, index: number) => (
            <S.Board
              key={board.id}
              onClick={props.onClickMoveToPage(`${props.pathname}/${board.id}`)}
            >
              <S.Number>{props.currentTopNumber - index}</S.Number>
              <S.Title>{board.title}</S.Title>
              <S.Writer>{board.writer}</S.Writer>
            </S.Board>
          ))}
        </S.BoardTable>
        <S.ButtonWrapper>
          <S.WriteButton
            onClick={props.onClickMoveToPage(`${props.pathname}/new`)}
          >
            게시글 작성
          </S.WriteButton>
        </S.ButtonWrapper>
        <S.PagenationGroup>
          <S.PrevButton onClick={props.onClickPrevButton}>
            이전 페이지
          </S.PrevButton>
          <S.NextButton onClick={props.onClickNextButton}>
            다음 페이지
          </S.NextButton>
        </S.PagenationGroup>
      </S.Wapper>
    </S.Container>
  );
}
