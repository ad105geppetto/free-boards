import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export function useModalErrorState() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClose = useCallback(() => {
    if (isOpen) {
      void router.push(router.asPath);
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return {
    isOpen,
    errorMessage,
    setErrorMessage,
    onClose,
  };
}
