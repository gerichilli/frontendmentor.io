import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClickOutside }) => {
  const elRef = useRef();

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.className = "bg-contrast-50 fixed top-1/2 left-1/2";
  }

  const handleClickOutside = (event) => {
    if (elRef.current && !elRef.current.contains(event.currentTarget)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
