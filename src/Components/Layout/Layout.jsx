import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="col-sm-12 col-md-12 col-xl-12 h-100 min-vh-100">
        <div className="container mx-auto customContainer">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
