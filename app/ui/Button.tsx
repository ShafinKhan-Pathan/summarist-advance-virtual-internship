import { auth } from "@/firebase/firebase";
import { createCheckoutSession } from "../utils/createCheckoutSession";
import { useState } from "react";
interface Props {
  onloading?: boolean;
  signUp?: boolean;
  forgotPassword?: boolean;
  subscription?: boolean;
  selectedPlan?: string;
}
const Button = ({
  onloading,
  signUp,
  forgotPassword,
  subscription,
  selectedPlan,
}: Props) => {
  const [loading, setLoading] = useState(false)
  const handleClick = async () => {
    if (!subscription) return;
    const user = auth.currentUser;
    if (!user) {
      alert("Please login to continue");
      return;
    }
    setLoading(true)
    const MONTHLY_PRICE_ID = "price_1SVxN4CXVGTDafRAPLUSyRCf";
    const YEARLY_PRICE_ID = "price_1SW1PdCXVGTDafRA5QhVEL5I";
    const priceToUse =
    selectedPlan === "monthly" ? MONTHLY_PRICE_ID : YEARLY_PRICE_ID;
    await createCheckoutSession(user?.uid, priceToUse);
  };
  return (
    <button
      disabled={onloading}
      onClick={subscription ? handleClick : undefined}
      type="submit"
      className={`bg-green-400 w-[70%] rounded-lg p-2 md:w-[70%] mb-4  ${
        forgotPassword ? "lg:w-70%" : "lg:w-[50%]"
      } hover:bg-green-600 duration-300 cursor-pointer`}
    >
      {loading
        ? "Redirecting..."
        : forgotPassword
        ? "Send Reset Link"
        : signUp
        ? "Sign Up"
        : subscription
        ? selectedPlan === "monthly"
          ? "Start your first month"
          : "Start your free 7-day trial"
        : "Login"}
    </button>
  );
};

export default Button;
