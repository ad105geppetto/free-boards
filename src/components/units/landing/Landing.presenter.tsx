import { ILandingUIProps } from "./Landing.types";
import * as S from "./Landing.styles";
import { itemsArr, images } from "./Landing.variables";
import HeadMeta from "../../commons/meta";

export default function LandingUI(props: ILandingUIProps) {
  return (
    <S.Container>
      <HeadMeta
        title="자유게시판 | 자유롭게 나누는 온라인 커뮤니티"
        description="자유게시판은 회원들이 자유롭게 글을 작성하고 소통할 수 있는 온라인 커뮤니티입니다. 다양한 주제의 게시글들이 올라와 있어서 언제나 새로운 정보와 이야기를 만날 수 있습니다. 회원가입 없이도 자유롭게 글을 읽고 댓글을 달 수 있으며, 누구나 쉽게 참여할 수 있습니다. 자유롭게 생각을 나누고 소통할 수 있는 자유게시판에서 새로운 인연을 만들어보세요."
      />
      <S.Wapper>
        <S.ImageWrapper>
          <S.TransactionImage
            src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/trading-icon.webp?alt=media"
            alt="transaction"
          />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Text>모두가 사용한 게시판</S.Text>
          <S.Text>요즘 게시판은 여기지!</S.Text>
        </S.TextWrapper>
        <S.DownArrowWrapper>
          <S.JoinUs>Join us!</S.JoinUs>
          <S.DownArrow
            src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/down-arrow-icon.webp?alt=media"
            alt="down-arrow"
          />
        </S.DownArrowWrapper>
        <S.ListWrapper ref={props.listRef}>
          {itemsArr.map((item, index) => (
            <S.ListItem key={index} className="list-item" itemUrl={item.url}>
              {item.title}
            </S.ListItem>
          ))}
        </S.ListWrapper>
        <S.ImageIconWrapper ref={props.imageListRef}>
          {images.map((image, index) => (
            <S.ImageIcon
              key={index}
              className="image-icon"
              id={image.id}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </S.ImageIconWrapper>
      </S.Wapper>
    </S.Container>
  );
}
