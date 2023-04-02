import { ILandingUIProps } from "./Landing.types";
import * as S from "./Landing.styles";
import { itemsArr, images } from "./Landing.variables";

export default function LandingUI(props: ILandingUIProps) {
  return (
    <S.Container>
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
