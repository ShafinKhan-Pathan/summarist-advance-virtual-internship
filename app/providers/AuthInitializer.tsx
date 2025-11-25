"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPremium } from "../redux/SubscriptionSlice";
import { getUserSubscription } from "../utils/getSubscription";

const AuthInitializer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(setPremium(false));
        return;
      }
      const subscription = await getUserSubscription(user.uid);
      dispatch(setPremium(!!subscription));
    });
    return () => unsubscribe();
  }, []);
  return null;
};

export default AuthInitializer;
