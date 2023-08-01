import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log("oopen");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    console.log("close");
    setShowModal(false);
  };

  return {
    showModal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
