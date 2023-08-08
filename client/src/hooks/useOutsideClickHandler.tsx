import { useEffect, useCallback } from "react";

const useOutsideClickHandler = (ref: React.RefObject<HTMLElement>, onClose: () => void) => {
  const handleCloseCart = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleCloseCart();
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [ref, handleCloseCart]);

};

export default useOutsideClickHandler;
