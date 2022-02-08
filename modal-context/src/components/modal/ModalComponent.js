import React from "react";
import { useModalContext } from "../../contexts/modalContext";

const ModalComponent = ({ title }) => {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <div
      className={`${isModalOpen ? "modal-overlay show" : "modal-overlay hide"}`}
    >
      <div className="modal-content">
        <div className="modal-title">
          <h3>{title}</h3>
          <span className="close">
            <button onClick={closeModal}>X</button>
          </span>
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit
            obcaecati necessitatibus. Sequi impedit iste sunt rem voluptates quo
            sed pariatur rerum! Aperiam, voluptates quia?
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-small" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
