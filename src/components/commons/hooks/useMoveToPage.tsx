import { useRouter } from "next/router";

export function useMoveToPage() {
  const router = useRouter();
  const currentPath = router.asPath;

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return {
    currentPath,
    onClickMoveToPage,
  };
}
