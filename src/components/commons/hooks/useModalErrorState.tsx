import { useRouter } from "next/router";
import { useState } from "react";

export function useModalErrorState() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClose = () => {
    if (isOpen) {
      void router.replace("/");
    }
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    errorMessage,
    setErrorMessage,
    onClose,
  };
}
