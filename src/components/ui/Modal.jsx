import React from "react";
import Modal from "react-modal";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import Receipt from "../Receipt";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    minWidth: "50vw",
    minHeight: "50vh",
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflowY: "auto",
    paddingTop: "15px",
    marginTop: "24px",
    paddingBottom: "15px",
  },
};

export default function PopUp({totalAmount}) {
  const orderId = Date.now();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showPaymentStatus, setShowPaymentStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setShowPaymentStatus(false);
  }

  function handleConfirmPayment() {
    setShowPaymentStatus(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPaymentStatus(true);
    }, 2000);
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="w-full flex py-2 justify-center items-center gap-1 mt-4 text-lg font-semibold text-white bg-[#0070F3] hover:bg-[#0062CC] rounded-md"
      >
        <span>Checkout</span> 
        <ArrowRight />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Payment Modal"
      >
        <div>
          <h2 className="text-2xl text-white text-center font-integral_bold">
            Payment
          </h2>
          <button
            className="absolute top-4 right-4 text-red-700 font-bold text-3xl"
            onClick={closeModal}
          >
            X
          </button>
          <div className="text-center mt-4 text-xl text-white">
            <p className="">
              Please make your payment to the following account...
            </p>
            <p className="text-xl text-white my-6">
              Account Number: 9159106582 <br />
              Account Name: Ikechukwu Thompson <br />
              Bank Name: PalmPay Ltd 
            </p>
            <p>
              Total Amount: <span className="text-yellow-500">${totalAmount}</span> <br />
              OrderID: <span>{orderId}</span> <br />
              <span className="text-yellow-500">
                Thanks for the Support 😁🙌🏽
              </span>
            </p>
          </div>
          <button
            onClick={handleConfirmPayment}
            className="w-full mt-4 py-2 text-lg font-semibold text-white bg-[#0070F3] hover:bg-[#0062CC] rounded-md"
          >
            {loading
              ? "Confirming Payment..."
              : showPaymentStatus
              ? "Confirm Payment Again"
              : "Confirm Payment"}
          </button>
        </div>

        {loading && <div className="custom-loader my-20 mx-auto"></div>}

        {showPaymentStatus && (
          <div className="text-center mt-4 text-xl text-white">
            <h2 className="text-2xl text-green-600 text-center font-integral_bold">
              Payment Successful😁
            </h2>
            <Receipt />
          </div>
        )}
      </Modal>
    </div>
  );
}
