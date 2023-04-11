import * as S from "./BoardList.styles";
import { Board, IBoardListUIProps } from "./BoardList.types";
import Modal02 from "../../../commons/modals/modal02";
import HeadMeta from "../../../commons/meta";
import Loading from "../../../commons/loading";
import Link from "next/link";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title="자유게시판 | 새로운 글과 뜨거운 토론, 목록페이지"
        description="자유게시판 목록페이지에서는 다양한 주제의 게시글들을 확인하실 수 있습니다. 회원들이 자유롭게 작성한 글들이 모여있어서 언제나 새로운 정보와 이야기를 만날 수 있습니다. 게시글의 제목과 작성자를 확인할 수 있어서 원하는 내용을 쉽게 찾아보실 수 있습니다. 자유롭게 작성된 게시글들을 통해 다양한 사람들의 생각과 의견을 알아보세요."
      />
      {props.isOpen && (
        <Modal02 errorMessage={props.errorMessage} onClose={props.onClose} />
      )}
      <S.Wapper>
        <S.BoardTitle>자유게시판</S.BoardTitle>
        <S.BoardTable>
          <S.BoardHeader>
            <S.Number>번호</S.Number>
            <S.Title>제목</S.Title>
            <S.Writer>작성자</S.Writer>
          </S.BoardHeader>
          {props.boards.length !== 0 ? (
            props.boards.map((board: Board, index: number) => (
              <Link
                href={`${props.pathname}${board.id}`}
                key={board.id}
                passHref
              >
                <S.Board>
                  <S.Number>{props.currentTopNumber - index}</S.Number>
                  <S.Title>{board.title}</S.Title>
                  <S.Writer>{board.writer}</S.Writer>
                </S.Board>
              </Link>
            ))
          ) : (
            <Loading />
          )}
        </S.BoardTable>

        <S.ButtonWrapper>
          <Link href={`${props.pathname}new`} passHref>
            <S.WriteButton>게시글 작성</S.WriteButton>
          </Link>
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
