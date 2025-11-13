"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrivateLayout from "../layout/PrivateLayout";
import { FaPlayCircle } from "react-icons/fa";
import BookList from "../ui/BookList";
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
      <div className="w-full xl:w-[70%] mx-auto min-h-screen">
        <h1 className="font-bold text-xl">Selected just for you</h1>
        <SelectedBook />
        <h1 className="font-bold text-xl">Recommended Books</h1>
        <h1>We think you’ll like these</h1>
        <RecommendedBooks />
        <h1 className="font-bold text-xl">Suggested Books</h1>
        <h1>Browse those books</h1>
        <SuggestedBooks />
        
      </div>
    </PrivateLayout>
  );
};

export default page;
