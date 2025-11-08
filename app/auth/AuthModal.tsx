"use client";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeLogin } from "../redux/ModalSlice";

const AuthModal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  return (
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
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
