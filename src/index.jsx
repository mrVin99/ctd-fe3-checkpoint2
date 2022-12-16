import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import AppRoutes from "./Routes";
import AuthProvider from "./Providers/AuthContext";
import ThemeProvider from "./Providers/ThemeProvider";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider >
        <AuthProvider>
          <Navbar />
          <AppRoutes />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
