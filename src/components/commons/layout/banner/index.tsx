import * as S from "./banner.styles";

export default function Banner() {
  return (
    <S.Container>
      <S.Wapper>
        <source
          srcSet="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/banner02_small.webp?alt=media"
          media="(max-width:767px)"
        />
        <S.BannerImage
          src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/banner02.webp?alt=media"
          alt="banner"
          loading="eager"
        />
      </S.Wapper>
    </S.Container>
  );
}
