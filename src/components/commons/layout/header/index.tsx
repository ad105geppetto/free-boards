import { useRouter } from "next/router";
import * as S from "./header.styles";

interface IProps {
  children: JSX.Element;
}

export default function Header(props: IProps) {
  const router = useRouter();

  const onClickMove = () => {
    void router.push("/");
  };
  return (
    <S.Container>
      <S.Wapper>
        <S.Image
          src="https://firebasestorage.googleapis.com/v0/b/used-item-boards.appspot.com/o/used-item-logo.webp?alt=media&token=97572f8c-d17a-4875-ba4f-3fa4e5f57464"
          alt="logo"
          onClick={onClickMove}
        />
        {props.children}
      </S.Wapper>
    </S.Container>
  );
}
