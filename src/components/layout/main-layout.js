import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--nav-h)" }}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
