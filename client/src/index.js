import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

let persistor = persistStore(store);
const REACT_APP_STRIPE_KEY =
  "pk_test_51O4SwmIxE6alSZJoHdEQF4OfVbJbkyBsJYuDAkzssF95O9U6hp69Iuv4cHDMEGR4LeUH9i9KvPhUTySnKLU3efXx00mpaw6opq";
const stripePromise = loadStripe(REACT_APP_STRIPE_KEY);
const options = {
  currency: "usd",
  mode: "payment",
  amount: 10000,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Elements stripe={stripePromise} options={options}>
        <App />
      </Elements>
    </PersistGate>
  </Provider>
  // </React.StrictMode> // <-- Add closing tag here
);

reportWebVitals();
