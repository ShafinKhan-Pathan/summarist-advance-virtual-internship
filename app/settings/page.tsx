"use client";

import { auth, db } from "@/firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Settings = () => {
  const [status, setStatus] = useState("loading");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchSubscription = async () => {
      const user = auth.currentUser;
      if (!user) return;

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
    };

    fetchSubscription();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-lg">Email: {email}</p>
      <p className="text-lg">Subscription: {status}</p>
    </div>
  );
};

export default Settings;
