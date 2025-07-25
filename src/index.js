import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppLayout from "./components/AppLayout";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Modal from "react-modal";
import AuthProvider from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement('#root')
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppLayout>
            <App />
          </AppLayout>
        </Router>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
