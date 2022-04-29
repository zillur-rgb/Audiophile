import React from "react";

const CartCard = ({ show, children, handleModalClose }) => {
  const displyModal = show ? "block" : "hidden";
  return (
    <div
      className={`
        modal fixed top-0 left-0 w-full h-screen bg-text-black ${displyModal} flex items-center justify-center
        `}
    >
      <div className="modal-main fixed bg-white w-1/4 h-auto rounded-md flex items-center justify-center flex-col">
        <div className="text-black">{children}</div>
        <button
          onClick={handleModalClose}
          className="px-6 py-2 bg-orange text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartCard;
