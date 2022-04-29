import React from "react";
import { Link } from "react-router-dom";
import CardContent from "../CardContent/CardContent";

const CartCard = ({ show, handleModalClose, setShowModal }) => {
  const displyModal = show ? "block" : "hidden";
  return (
    <div
      className={`
        modal fixed top-0 left-0 w-full h-screen bg-text-black ${displyModal} flex items-center justify-center
        `}
      onClick={handleModalClose}
    >
      <div
        className="modal-main fixed bg-white w-4/6 xl:w-1/4 h-auto rounded-md flex items-center justify-center flex-col"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="text-black">
          <CardContent />
        </div>
        <div className="my-4">
          <button
            onClick={handleModalClose}
            className=" mr-2 px-6 py-2 bg-black text-white"
          >
            Close
          </button>
          <Link to="/earphones">
            <button
              onClick={handleModalClose}
              className=" ml-2 px-6 py-2 bg-orange text-white"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
