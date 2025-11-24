"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UserCog, EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Divider from "../ui/Divider";
import { motion } from "framer-motion";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import AuthTitle from "./AuthTitle";

const AuthForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const provider = new GoogleAuthProvider();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const schema = z.object({
    email: z.string().email("Please enter a valid email address"),
    ...(isForgotPassword
      ? {}
      : {
          password: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(/^\S*$/, "Password cannot contain spaces"),
        }),
  });
  type formFields = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const isOpen = useSelector(
    (state: RootState) => state.modalSlice.isLoginOpen
  );
  const onSubmitForm: SubmitHandler<formFields> = async ({
    email,
    password,
  }) => {
    try {
      if (isForgotPassword) {
        await handleOnForgotPassword(email);
        return;
      }
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password as string);
      } else {
        await signInWithEmailAndPassword(auth, email, password as string);
      }
      navigateToDashboard();
    } catch (error: any) {
      let message = "An unexpected error occurred";
      if (error.code === "auth/email-already-in-use")
        message = "This email is already registered.";
      if (error.code === "auth/invalid-credential")
        message = "Invalid email or password.";
      if (error.code === "auth/weak-password")
        message = "Password must be at least 6 characters.";
      setError("root", { type: "manual", message });
    }
  };
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      await signInWithPopup(auth, provider);
      navigateToDashboard();
    } catch (error: any) {
      let message = "An unexpected error occurred during Google login.";
      if (error.code === "auth/popup-closed-by-user")
        message = "Google sign-in popup closed before completion.";
      if (error.code === "auth/cancelled-popup-request")
        message = "Multiple popup requests detected. Please try again.";
      if (error.code === "auth/popup-blocked")
        message = "Your browser blocked the sign-in popup.";
      setError("root", { type: "manual", message });
    } finally {
      setGoogleLoading(false);
    }
  };
  const handleOnForgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("✅ Password reset link sent! Check your inbox.");

      reset();
    } catch (error: any) {
      let message = "Failed to send reset email.";
      if (error.code === "auth/user-not-found")
        message = "No account found with this email";
      if (error.code === "auth/invalid-email")
        message = "Please enter a valid email.";
      setError("root", { type: "manual", message });
    }
  };
  const navigateToDashboard = () => {
    router.replace("/for-you");
    reset();
  };
  useEffect(() => {
    if (!isOpen) {
      setIsSignUp(false);
      setForgotPassword(false);
      reset();
    }
  }, [isOpen]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.replace("/for-you");
      }
    });
    return () => unsubscribe();
  }, [router]);
  if (!isOpen) return null;
  return (
    <>
      <AuthModal>
        <div className="flex flex-col justify-center items-center w-full">
          <AuthTitle
            text={
              isSignUp
                ? "Welcome to Summarist ✨"
                : isForgotPassword
                ? "Reset your password"
                : "Login in to Summarist ✨"
            }
          />
          {!isSignUp && !isForgotPassword && (
            <>
              <button
                onClick={async () => {
                  try {
                    await signInAnonymously(auth);
                    navigateToDashboard();
                  } catch (error: any) {
                    let message =
                      "An unexpected error occurred while logging in as guest.";
                    if (error.code === "auth/operation-not-allowed")
                      message = "Guest login is disabled in Firebase settings.";
                    if (error.code === "auth/network-request-failed")
                      message = "Network error. Please check your connection.";
                    setError("root", { type: "manual", message });
                  }
                }}
                className="relative bg-[#3a579d] text-white w-full p-2 flex justify-center items-center border-2 cursor-pointer"
              >
                <h1 className="absolute left-2">
                  <UserCog size={25} />
                </h1>
                <p>Login as Guest</p>
              </button>
              <Divider />
            </>
          )}
          {!isForgotPassword && (
            <>
              <button
                onClick={handleGoogleLogin}
                className="relative bg-[#4285f4] text-white w-full p-2 flex justify-center items-center border-2 cursor-pointer"
              >
                <h1 className="absolute left-1">
                  <Image
                    src="/google.png"
                    height={35}
                    width={35}
                    alt="google"
                    priority
                    className="bg-white rounded-md p-1"
                  />
                </h1>
                <p>{googleLoading ? "Signing in..." : "Login with Google"}</p>
              </button>
              <Divider  />
            </>
          )}
        </div>
        <form
          className="py-2 flex flex-col gap-4 items-center"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <input
            {...register("email")}
            type="text"
            className="bg-white w-full shadow-2xl border border-gray-400 p-2 placeholder:text-gray-400 text-sm rounded-sm outline-green-500 transition-colors duration-700"
            placeholder="Email Address"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          {!isForgotPassword && (
            <>
              <div className="w-full flex justify-center items-center relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="bg-white w-full shadow-2xl border border-gray-400 p-2 placeholder:text-gray-400 text-sm rounded-sm outline-green-500 transition-colors duration-700 "
                  placeholder="Password"
                />

                <button
                  type="button"
                  className="absolute right-2"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </>
          )}

          {errors.root && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-red-500 text-sm text-center mb-2"
            >
              {errors.root.message}
            </motion.div>
          )}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-green-600 text-sm text-center mb-2 font-bold"
            >
              {successMessage}
            </motion.div>
          )}

          <Button
            onloading={isSubmitting}
            signUp={isSignUp}
            forgotPassword={isForgotPassword}
          />
        </form>
        <button
          onClick={() => {
            setForgotPassword(true);
          }}
          className="text-blue-500 mb-8 cursor-pointer"
        >
          {isForgotPassword ? "" : "Forgot your password?"}
        </button>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="absolute w-full bottom-0 left-0 right-0 text-blue-500 shadow-2xl bg-[#f1f6f4] text-lg hover:bg-[#dadedc] duration-500 rounded-xs mt-4 p-2 cursor-pointer"
        >
          {isSignUp ? "Already have an account" : "Don't have an account?"}
        </button>
        {isForgotPassword && (
          <>
            <button
              onClick={() => {
                setForgotPassword(false);
                setIsSignUp(false);
                reset();
              }}
              className="absolute w-full bottom-0 left-0 right-0 text-blue-500 shadow-2xl bg-[#f1f6f4] text-lg hover:bg-[#dadedc] duration-500 rounded-xs mt-4 p-2 cursor-pointer"
            >
              Go to Login
            </button>
          </>
        )}
      </AuthModal>
    </>
  );
};

export default AuthForm;
