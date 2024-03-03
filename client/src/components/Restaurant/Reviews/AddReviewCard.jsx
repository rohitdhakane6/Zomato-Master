import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// component
import ReviewModal from "./ReviewModal";

function AddReviewCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (!localStorage.ZomatoUser) {
      return toast.error("Please sign in to post a review");
    }

    setIsOpen(true);
  };

  return (
    <>
    <ToastContainer/>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-xl font-medium">Rate your experience for</h3>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <button onClick={openModal} className="text-zomato-400">
        Write a review
      </button>
    </>
  );
}

export default AddReviewCard;