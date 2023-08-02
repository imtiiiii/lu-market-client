import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext"; // Assuming you have a UserProvider

ReactDOM.render(
  <UserProvider>
    <ToastContainer position="top-center"></ToastContainer>
    <App></App>
  </UserProvider>,
  document.getElementById("root")
);
