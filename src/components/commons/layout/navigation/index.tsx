import { useRouter } from "next/router";
import * as S from "./navigation.styles";

const menus = [
  { title: "홈", path: "/" },
  { title: "자유게시판", path: "/free-boards" },
];

export default function Navigation() {
  const router = useRouter();

  const onClickMove = (path: string) => () => {
    void router.push(path);
  };
  return (
    <S.Container>
      <S.Wapper>
        {menus.map((menu, index) => (
          <S.Menu key={index} onClick={onClickMove(menu.path)}>
            {menu.title}
          </S.Menu>
        ))}
      </S.Wapper>
    </S.Container>
  );
}
