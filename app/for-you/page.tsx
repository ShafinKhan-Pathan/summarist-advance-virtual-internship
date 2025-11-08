"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {user ? <h1>Hello {user.email}</h1> : "Loading..."}

      <Link href={"/"} onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default page;
