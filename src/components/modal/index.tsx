'use client';

import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean; // `isOpen` is a boolean
  onClose: () => void; // `onClose` is a function
  children: React.ReactNode; // `children` represents the content passed into the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickAway = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickAway);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickAway);
  //   };
  // }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickAway);
    } else {
      document.removeEventListener("mousedown", handleClickAway);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "24px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
