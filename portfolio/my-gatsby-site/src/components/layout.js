// src/components/Layout.js
import React from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import { buttons } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className={buttons}></div>
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer /> {/* Футер тепер винесено за контейнер */}
    </>
  );
};

export default Layout;