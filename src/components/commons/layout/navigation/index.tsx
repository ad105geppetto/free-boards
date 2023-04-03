import { useRouter } from "next/router";
import { useState, useRef } from "react";
import * as S from "./navigation.styles";

const menus = [
  { title: "홈", path: "/" },
  { title: "자유게시판", path: "/free-boards" },
];

export default function Navigation() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const onClickMove = (path: string) => () => {
    onClickHamburger();
    void router.push(path);
  };

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
        <S.MenuWrapper isVisible={isVisible} ref={menuRef}>
          {menus.map((menu, index) => (
            <S.Menu key={index} onClick={onClickMove(menu.path)}>
              {menu.title}
            </S.Menu>
          ))}
        </S.MenuWrapper>
      </S.Wapper>
    </S.Container>
  );
}
