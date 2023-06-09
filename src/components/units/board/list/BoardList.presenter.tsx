import * as S from "./BoardList.styles";
import { Board, IBoardListUIProps } from "./BoardList.types";
import HeadMeta from "../../../commons/meta";
import Loading from "../../../commons/loading";
import Link from "next/link";
import Modal from "../../../commons/modal";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title="새로운 글과 뜨거운 토론, 목록페이지 - UNION"
        description="자유게시판 목록페이지에서는 다양한 주제의 게시글들을 확인하실 수 있습니다. 게시글의 제목과 작성자를 확인할 수 있어서 원하는 내용을 쉽게 찾아보실 수 있습니다."
        ogDescription="자유게시판 목록페이지에서는 다양한 주제의 게시글들을 확인하실 수 있습니다. 게시글의 제목과 작성자를 확인할 수 있어서 원하는 내용을 쉽게 찾아보실 수 있습니다."
      />
      {props.isOpen && (
        <Modal errorMessage={props.errorMessage} onClose={props.onClose} />
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
