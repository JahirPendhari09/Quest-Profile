import React, { ReactNode } from "react";
import "../App.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalContainer">
      <div className="modalDiv">
        <button className="modalCloseBTN" onClick={onClose}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
