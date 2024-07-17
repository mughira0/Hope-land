import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import ModalSkeleton from "../../Components/ModalSkeleton/ModalSkeleton";
import classes from "./PaymentFormModal.module.css";

const PaymentFormModal = ({ show, selectedItem, setShow, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!elements || !stripe) {
      setLoading(false);
      return;
    }

    try {
      const submitResult = await elements.submit();
      if (submitResult.error) {
        setError(submitResult.error.message);
        setLoading(false);
        return;
      }
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/subscription`,
        },
      });

      if (error) {
        setError(error.message);
      }
      setShow((prev) => ({ ...prev, show: false }));
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    }

    setLoading(false);
  };

  return (
    <ModalSkeleton
      width={"700px"}
      header={"Payment Form"}
      show={show}
      setShow={setShow}
    >
      <div className={classes.pageMain}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <PaymentElement options={{ clientSecret }} />
          {error && <div className={classes.error}>{error}</div>}
          <button type="submit" disabled={!stripe || !elements || loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </ModalSkeleton>
  );
};

export default PaymentFormModal;
