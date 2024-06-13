// components/LoginModal.js
import React, {useEffect, useRef} from "react";
import Login from "./Login";

const LoginModal = ({loginModalOpen, setLoginModalOpen}) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLoginModalOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setLoginModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setLoginModalOpen]);

  if (!loginModalOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalRef}>
        <button
          className="close-button"
          onClick={() => setLoginModalOpen(false)}
        >
          ×
        </button>
        {/* Modal content goes here */}
        <Login />
        {/* Add form or other content as needed */}
      </div>
    </div>
  );
};

export default LoginModal;
