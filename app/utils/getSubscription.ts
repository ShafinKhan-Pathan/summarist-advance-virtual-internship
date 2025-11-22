import { db } from "@/firebase/firebase";
import { collection, getDocs, doc } from "firebase/firestore";

export async function getUserSubscription(uid: string) {
  try {
    const subRef = collection(db, "customers", uid, "subscriptions");
    const snap = await getDocs(subRef);

    if (snap.empty) return null;

    let subscription = null;

    snap.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.status === "active") {
        subscription = {
          status: data.status,
          priceId: data.items?.[0]?.price?.id ?? null,
        };
      }
    });

    return subscription;
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return null;
  }
}
