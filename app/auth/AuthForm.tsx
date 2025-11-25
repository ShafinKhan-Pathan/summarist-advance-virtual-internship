"use client";

import { useDispatch, useSelector } from "react-redux";
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
  signInWithRedirect,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
  getRedirectResult
} from "firebase/auth";

import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import AuthTitle from "./AuthTitle";
import { closeLogin } from "../redux/ModalSlice";

const provider = new GoogleAuthProvider();

const AuthForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  const isOpen = useSelector(
    (state: RootState) => state.modalSlice.isLoginOpen
  );

  // ---------- Redirect handler ----------
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          dispatch(closeLogin());
          router.replace("/for-you");
        }
      })
      .catch(() => {});
  }, []);

  const schema = z.object({
    email: z.string().email("Please enter a valid email"),
    ...(isForgotPassword
      ? {}
      : {
          password: z
            .string()
            .min(8, "Password must be at least 8 characters")
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

  // ---------- Email login/signup ----------
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

      dispatch(closeLogin());
      reset();
      router.replace("/for-you");
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

  // ---------- GOOGLE LOGIN (Popup → Redirect fallback) ----------
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      await signInWithPopup(auth, provider);
      dispatch(closeLogin());
      reset();
      router.replace("/for-you");
    } catch (error: any) {
      console.warn("Popup failed → Switching to redirect", error.code);

      const popupErrors = [
        "auth/popup-blocked",
        "auth/popup-closed-by-user",
        "auth/cancelled-popup-request",
        "auth/popup-blocked-by-browser",
      ];

      if (popupErrors.includes(error.code)) {
        try {
          await signInWithRedirect(auth, provider);
          return;
        } catch (redirectError) {
          setError("root", {
            type: "manual",
            message: "Google login failed. Please try again.",
          });
        }
      } else {
        setError("root", {
          type: "manual",
          message: "Google login failed. Please try again.",
        });
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // ---------- Forgot password ----------
  const handleOnForgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset link sent! Check your inbox.");
      reset();
    } catch (error: any) {
      let message = "Failed to send reset email.";
      if (error.code === "auth/user-not-found")
        message = "No account found with this email";
      setError("root", { type: "manual", message });
    }
  };

  // ---------- Track signed-in guest ----------
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsGuest(user?.isAnonymous ?? false);
    });
    return () => unsub();
  }, []);

  // ---------- Reset form when modal closes ----------
  useEffect(() => {
    if (!isOpen) {
      setIsSignUp(false);
      setForgotPassword(false);
      reset();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AuthModal>
      <div className="flex flex-col justify-center items-center w-full">
        <AuthTitle
          text={
            isSignUp
              ? "Welcome to Summarist ✨"
              : isForgotPassword
              ? "Reset your password"
              : isGuest
              ? "Guest accounts cannot access premium content"
              : "Login to Summarist ✨"
          }
        />

        {/* Guest login */}
        {!isGuest && !isSignUp && !isForgotPassword && (
          <>
            <button
              onClick={async () => {
                try {
                  await signInAnonymously(auth);
                  dispatch(closeLogin());
                  router.replace("/for-you");
                } catch {
                  setError("root", {
                    type: "manual",
                    message: "Guest login failed.",
                  });
                }
              }}
              className="relative bg-[#3a579d] text-white w-full p-2 flex justify-center items-center border-2 cursor-pointer"
            >
              <span className="absolute left-2">
                <UserCog size={25} />
              </span>
              Login as Guest
            </button>
            <Divider />
          </>
        )}

        {/* Google login */}
        {!isForgotPassword && (
          <>
            <button
              onClick={handleGoogleLogin}
              className="relative bg-[#4285f4] text-white w-full p-2 flex justify-center items-center border-2 cursor-pointer"
            >
              <span className="absolute left-1">
                <Image
                  src="/google.png"
                  height={35}
                  width={35}
                  alt="google"
                  priority
                  className="bg-white rounded-md p-1"
                />
              </span>
              {googleLoading ? "Signing in..." : "Login with Google"}
            </button>
            <Divider />
          </>
        )}
      </div>

      {/* Email form */}
      <form
        className="py-2 flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <input
          {...register("email")}
          type="text"
          placeholder="Email Address"
          className="bg-white w-full shadow-2xl border border-gray-400 p-2 placeholder:text-gray-400 text-sm rounded-sm outline-green-500 transition-colors duration-700"
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
                placeholder="Password"
                className="bg-white w-full shadow-2xl border border-gray-400 p-2 placeholder:text-gray-400 text-sm rounded-sm outline-green-500 transition-colors duration-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center mb-2"
          >
            {errors.root.message}
          </motion.div>
        )}

        {successMessage && (
          <motion.div className="text-green-600 text-sm text-center mb-2 font-bold">
            {successMessage}
          </motion.div>
        )}

        <Button
          onloading={isSubmitting}
          signUp={isSignUp}
          forgotPassword={isForgotPassword}
        />
      </form>

      {!isForgotPassword && (
        <button
          onClick={() => setForgotPassword(true)}
          className="text-blue-500 mb-8 cursor-pointer"
        >
          Forgot your password?
        </button>
      )}

      <button
        onClick={() => setIsSignUp(!isSignUp)}
        className="absolute w-full bottom-0 left-0 right-0 text-blue-500 shadow-2xl bg-[#f1f6f4] text-lg hover:bg-[#dadedc] duration-500 rounded-xs mt-4 p-2 cursor-pointer"
      >
        {isSignUp ? "Already have an account" : "Don't have an account?"}
      </button>

      {isForgotPassword && (
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
      )}
    </AuthModal>
  );
};

export default AuthForm;
