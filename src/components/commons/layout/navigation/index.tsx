import Link from "next/link";
import { useState, memo } from "react";
import * as S from "./navigation.styles";

const menus = [
  { title: "홈", path: "/" },
  { title: "자유게시판", path: "/free-boards" },
];

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHamburger = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <S.Container>
      <S.Wapper>
        <S.HamburgerButton onClick={onClickHamburger}>
          <S.Bar></S.Bar>
          <S.Bar></S.Bar>
          <S.Bar></S.Bar>
        </S.HamburgerButton>
        <S.MenuGroup isVisible={isVisible}>
          {menus.map((menu, index) => (
            <S.MenuWrapper key={index}>
              <Link key={index} href={`${menu.path}`} passHref>
                <S.Menu onClick={onClickHamburger}>{menu.title}</S.Menu>
              </Link>
            </S.MenuWrapper>
          ))}
        </S.MenuGroup>
      </S.Wapper>
    </S.Container>
  );
}

export default memo(Navigation);
