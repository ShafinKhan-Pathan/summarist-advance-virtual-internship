"use client";
import Image from "next/image";
import { SidebarLinks, SidebarLinksAdditional } from "../constants/StaticData";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { closeSideBar } from "../redux/SidebarSlice";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.sidebarSlice.isOpen);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      {isOpen && (
        <motion.div
          key="sidebarmenu"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => dispatch(closeSideBar())}
        />
      )}
      <aside
        className={`bg-[#f7faf9] shadow-2xl md:flex md:flex-col justify-between list-none p-4 w-[220px] min-h-screen  ${
          isOpen
            ? "fixed top-0 left-0 flex flex-col justify-between w-[400px] z-50"
            : "hidden"
        }`}
      >
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="mb-8"
          />
          <ul className="space-y-16 mt-10">
            {SidebarLinks.map((link, index) => (
              <li
                key={index}
                className={`w-full flex items-center gap-3  rounded-md px-3 py-2 transition-all ${
                  link.disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-slate-200"
                } `}
              >
                <link.icon size={20} />
                <span className="text-lg">{link.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-16">
            {SidebarLinksAdditional.map((link, index) => (
              <li
                key={index}
                onClick={link.isLogout ? () => handleLogout() : undefined}
                className={`w-full flex items-center gap-3 rounded-md px-3 py-2 transition-all  ${
                  link.disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-slate-200"
                } `}
              >
                <link.icon size={20} />
                <span className="text-lg">{link.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
