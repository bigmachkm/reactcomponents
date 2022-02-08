import React, { useState, useContext } from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Add custom hook to use context
export const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider };
