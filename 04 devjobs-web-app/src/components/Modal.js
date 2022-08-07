import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClickOutside }) {
  const elRef = useRef();

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.className =
      "bg-contrast-50 rounded-md fixed top-1/2 left-6 right-6 translate-y-[-50%] z-10";
  }

  function handleClickOutside(event) {
    if (elRef.current && !elRef.current.contains(event.target)) {
      onClickOutside();
    }
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (!modalRoot || !elRef.current) {
      return;
    }
    const modalOverlay = document.createElement("div");
    modalOverlay.className =
      "fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50";
    modalRoot.appendChild(modalOverlay);
    modalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(modalOverlay);
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

  return createPortal(
    <div className="flex flex-col">{children}</div>,
    elRef.current
  );
}

export default Modal;
