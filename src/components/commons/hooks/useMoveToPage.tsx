import { useRouter } from "next/router";
import { useCallback } from "react";

export function useMoveToPage() {
  const router = useRouter();
  const currentPath = router.asPath;

  const onClickMoveToPage = useCallback(
    (path: string) => () => {
      void router.push(path);
    },
    []
  );

  return {
    currentPath,
    onClickMoveToPage,
  };
}
