import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/SidebarSlice";
const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 border-b border-[#e1e7ea]">
      <div className="flex w-full md:w-[75%] items-center justify-end  rounded-sm px-4 py-2 gap-4">
        <form className="border-2 border-[#e1e7ea] bg-[#f1f6f4]  gap-4">
          <input
            type="text"
            placeholder="search by name"
            className="bg-[#f1f6f4] border-r border-[#e1e7ea] outline-none px-2 py-1 rounded-sm"
          />
          <FiSearch size={20} className="inline-block m-2" />
        </form>
        <button className="md:hidden" onClick={() => dispatch(toggleSideBar())}>
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
