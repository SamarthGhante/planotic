import React from "react";

interface childrenProp {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: childrenProp) {
  return <div className="h-full">{children}</div>;
}
