import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <Header />
      <main className="h-full overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
