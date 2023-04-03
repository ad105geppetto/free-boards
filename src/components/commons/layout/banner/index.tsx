import * as S from "./banner.styles";

export default function Banner() {
  return (
    <S.Container>
      <S.Wapper>
        <S.BannerImage
          src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/banner02.webp?alt=media"
          alt="banner"
        />
      </S.Wapper>
    </S.Container>
  );
}
