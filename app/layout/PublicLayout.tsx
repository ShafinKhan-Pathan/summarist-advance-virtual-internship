"use client";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full lg:max-w-[65%] mx-auto">
      {children}
    </div>
  );
}
