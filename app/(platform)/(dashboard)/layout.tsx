import React from "react";
import Navbar from "./_components/navbar";

interface childrenProp {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: childrenProp) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
