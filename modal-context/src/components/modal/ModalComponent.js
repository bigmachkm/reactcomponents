import React from "react";
import "./modalStyles.css";
import { useModalContext } from "../../contexts/modalContext";
import { FaTimes } from "react-icons/fa";

const ModalComponent = ({ title }) => {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container show-modal" : "modal-container"
      }`}
    >
      <div className="modal">
        <button className="modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-content">
          <p>Modal content text</p>
        </div>
        <div className="modal-footer">Modal Footer</div>
      </div>
    </div>
  );
};

export default ModalComponent;
