"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrivateLayout from "../layout/PrivateLayout";
import RecommendedBooks from "../components/RecommendedBooks";
import SuggestedBooks from "../components/SuggestedBooks";
import SelectedBook from "../components/SelectedBook";

const page = () => {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <PrivateLayout>
      <div className="w-full xl:w-[70%] mx-auto min-h-screen ">
        <h1 className="font-bold text-2xl mb-4 tracking-wider">Selected just for you</h1>
        <SelectedBook />
        <h1 className="font-bold text-2xl mb-4 mt-4 tracking-wider">Recommended Books</h1>
        <h2 className="mb-8 font-semibold tracking-wide text-lg">We think you’ll like these</h2>
        <RecommendedBooks />
        <h1 className="font-bold text-2xl mb-4 mt-4 tracking-wider">Suggested Books</h1>
        <h2 className="mb-8 font-semibold tracking-wide text-lg">Browse those books</h2>
        <SuggestedBooks />
        
      </div>
    </PrivateLayout>
  );
};

export default page;
