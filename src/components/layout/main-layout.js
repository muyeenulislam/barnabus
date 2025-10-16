import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
