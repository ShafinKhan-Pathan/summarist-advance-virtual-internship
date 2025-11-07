"use client"
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openLogin } from "../redux/ModalSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <figure className="max-w-[200px] flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Summarist Logo"
            width={110}
            height={50}
            className="w-full h-auto"
            priority
          />
        </figure>
        <ul className="flex gap-2 text-slate-500 ">
          <li className="hover:text-green-600 duration-300 cursor-pointer">
            <Link href={""} onClick={() => dispatch(openLogin())}>Login</Link>
          </li>
          <li className="cursor-not-allowed hidden md:block">About</li>
          <li className="cursor-not-allowed hidden md:block">Contact</li>
          <li className="cursor-not-allowed hidden md:block">Help</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
