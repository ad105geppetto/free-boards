import Link from "next/link";
import * as S from "./header.styles";

interface IProps {
  children: JSX.Element;
}

export default function Header(props: IProps) {
  return (
    <S.Container>
      <S.Wapper>
        <Link href={"/"} passHref>
          <S.ImageWrapper>
            <S.Image
              src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/used-item-logo.webp?alt=media&token=97572f8c-d17a-4875-ba4f-3fa4e5f57464"
              alt=""
            />
            <S.H1>UNION</S.H1>
          </S.ImageWrapper>
        </Link>
        {props.children}
      </S.Wapper>
    </S.Container>
  );
}
