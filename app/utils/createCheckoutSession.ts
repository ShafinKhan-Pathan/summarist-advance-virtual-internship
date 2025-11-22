import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// This triggers Stripe Checkout through the Firebase extension
export async function createCheckoutSession(userId: string, priceId: string) {
  // Create a Checkout Session in Firestore
  const docRef = await addDoc(
    collection(db, "customers", userId, "checkout_sessions"),
    {
      price: priceId,
      success_url: window.location.origin + "/for-you",
      cancel_url: window.location.origin + "/choose-plan",
    }
  );

  // Wait for Stripe to return a checkout URL
  onSnapshot(docRef, (snap) => {
    const data = snap.data();
    if (!data) return;

    if (data.error) {
      alert("Payment Error: " + data.error.message);
      return;
    }

    if (data.url) {
      window.location.assign(data.url);
    }
  });
}
