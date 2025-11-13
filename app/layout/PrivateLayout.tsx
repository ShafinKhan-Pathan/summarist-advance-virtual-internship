"use client";

import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.replace("/");
      else setUser(currentUser);
    });
    return unsubscribe;
  }, [router]);
  if (!user) return null;
  return (
    <div className="flex h-screen bg-[#f7f9f9] overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Topbar />
        <main className="p-8">{children}</main>
      </div>
    </div>

  );
}
