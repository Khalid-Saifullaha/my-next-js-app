import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
