"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { closeLogin } from "../redux/ModalSlice";
import { IoClose } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import Button from "../ui/Button";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Divider from "../ui/Divider";
import { motion } from "framer-motion";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/^\S*$/, "Password cannot contain spaces"),
});

type formFields = z.infer<typeof schema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modalSlice.isLoginOpen
  );
  const onSubmitForm: SubmitHandler<formFields> = async ({
    email,
    password,
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(email, password);
    reset();
  };
  if (!isOpen) return null;
  return (
    <>
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/50 flex justify-center items-center text-center z-50"
      >
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          exit={{ y: 30 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-xl p-6 w-[400px] relative flex flex-col"
        >
          <button
            onClick={() => dispatch(closeLogin())}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={35} />
          </button>
          <div className="flex flex-col justify-center items-center w-full">
            <motion.h2
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isSignUp
                ? "Welcome to Summarist ✨"
                : "Login in to Summarist ✨"}
            </motion.h2>
            {!isSignUp && (
              <>
                <button className="relative bg-[#3a579d] text-white w-full p-2 flex justify-center items-center border-2">
                  <h1 className="absolute left-2">
                    <GrUserAdmin size={25} />
                  </h1>
                  <p>Login as Guest</p>
                </button>
                <Divider />
              </>
            )}
            <button className="relative bg-[#4285f4] text-white w-full p-2 flex justify-center items-center border-2 cursor-pointer">
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
              <p>Login with Google</p>
            </button>
            <Divider />
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
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
            <Button onloading={isSubmitting} signUp={isSignUp} />
          </form>
          <button className="text-blue-500 mb-8 cursor-pointer">
            Forgot your password?
          </button>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="absolute w-full bottom-0 left-0 right-0 text-blue-500 shadow-2xl bg-[#f1f6f4] text-lg hover:bg-[#dadedc] duration-500 rounded-xs mt-4 p-2 cursor-pointer"
          >
            {isSignUp ? "Already have an account" : "Don't have an account?"}
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Login;
