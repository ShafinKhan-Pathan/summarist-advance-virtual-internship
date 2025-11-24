"use client";

import { auth, db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import PrivateLayout from "../layout/PrivateLayout";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import SettingsSkeleton from "../skeleton/SettingsSkeleton";

const Settings = () => {
  const [status, setStatus] = useState("loading");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchSubscription = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setStatus("basic");
        return;
      }
      setEmail(user.email || "");
      const subColRef = collection(db, "customers", user.uid, "subscriptions");
      const snap = await getDocs(subColRef);
      if (snap.empty) {
        setStatus("basic");
        return;
      }
      let premium = false;
      snap.forEach((doc) => {
        const data = doc.data();
        if (data.status === "active") {
          premium = true;
        }
      });
      setStatus(premium ? "premium" : "basic");
    });
    return () => fetchSubscription();
  }, []);
  return (
    <PrivateLayout>
      {status === "loading" ? (
        <SettingsSkeleton />
      ) : (
        <div className="w-full lg:max-w-[65%] mx-auto space-y-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 border-b border-[#e1e7ea]">
            Settings
          </h1>
          <p className="text-lg border-b border-[#e1e7ea]">
            <span className="font-bold">Your Subscription Plan: </span>
            <br />
            {status === "premium" ? "Premium" : "Basic"}
          </p>
          <p className="text-lg border-b border-[#e1e7ea]">
            <span className="font-bold">Email: </span>
            <br />
            {email ? `${email}` : "Guest"}
          </p>
          {status === "basic" && (
            <Link
              href="/choose-plan"
              className={`bg-green-400 w-[70%] rounded-lg p-2 md:w-[70%] hover:bg-green-600 duration-300 cursor-pointer`}
            >
              Upgrade to Premium
            </Link>
          )}
        </div>
      )}
    </PrivateLayout>
  );
};

export default Settings;
