"use client";
import Image from "next/image";
import { SidebarLinks, SidebarLinksAdditional } from "../constants/StaticData";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { closeSideBar } from "../redux/SidebarSlice";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function SidebarInner({ onLogout }: { onLogout: () => Promise<void> }) {
  const router = useRouter();
  const pathname = usePathname();
  const isPlayerPage = pathname.startsWith("/player/");
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="mb-8 w-auto h-auto"
        />
        <ul className="space-y-2 mt-10">
          {SidebarLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={index}
                onClick={() => {
                  if (!link.disabled && !link.isLogout) {
                    router.push(link.path);
                    dispatch(closeSideBar());
                  }
                  if (link.isLogout) onLogout();
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 transition-all border-l-4 ${
                  isActive
                    ? "border-green-500 "
                    : "border-transparent hover:bg-slate-200"
                } ${
                  link.disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-slate-200"
                } `}
              >
                <link.icon size={20} />
                <span className="text-lg">{link.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className={`${isPlayerPage ? "pb-48 lg:pb-32" : "pb-0"}`}>
          {SidebarLinksAdditional.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={index}
                onClick={() => {
                  if (!link.disabled && !link.isLogout) {
                    router.push(link.path);
                    dispatch(closeSideBar());
                  }
                  if (link.isLogout) onLogout();
                }}
                className={`w-full flex items-center gap-3 rounded-md px-3  py-2 transition-all border-l-4 ${
                  isActive
                    ? "border-green-500 "
                    : "border-transparent hover:bg-slate-200"
                }  ${
                  link.disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-slate-200"
                } `}
              >
                <link.icon size={20} />
                <span className="text-lg">{link.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -350 }}
            animate={{ x: 0 }}
            exit={{ x: -350 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#f7faf9] shadow-2xl md:hidden justify-between flex flex-col list-none p-4 w-[350px] min-h-screen fixed top-0 left-0 z-50"
          >
            <SidebarInner
              onLogout={async () => {
                await handleLogout();
                dispatch(closeSideBar());
              }}
            />
            <button
              onClick={() => dispatch(closeSideBar())}
              className="text-gray-500 hover:text-black transition md:hidden absolute top-6 right-10"
            >
              <X size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <aside className="bg-[#f7faf9] shadow-2xl hidden md:flex md:flex-col justify-between list-none p-4 w-[220px] h-screen sticky left-0 top-0 z-40">
        <SidebarInner onLogout={handleLogout} />
      </aside>
    </>
  );
};

export default Sidebar;
