import { useState } from "react";

export function useModalErrorState() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    errorMessage,
    setErrorMessage,
    onClose,
  };
}
