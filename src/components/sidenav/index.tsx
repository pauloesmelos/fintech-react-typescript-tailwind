import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaStore, FaCogs } from "react-icons/fa";
import { MdWebStories, MdEmail, MdLogout } from "react-icons/md";

const Sidenav = () => {
  return (
    <nav className="w-[280px] h-screen fixed bg-white border-r-2  shadow-md border-neutral-100">
      <div className="w-full p-4">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-[#66593c]">FINTECH.</h1>
          <ul className="flex flex-col gap-4 mt-10">
            <li className="cursor-pointer">
              <NavLink className="flex items-center gap-3 hover:opacity-70 duration-200" to={"/"}>
                <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                  <IoMdHome className="text-[#66593c] text-3xl" />
                </div>
                <span className="text-2xl font-bold">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink className="flex items-center gap-3 hover:opacity-70 duration-200" to={"/vendas"}>
                <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                  <FaStore className="text-[#66593c] text-3xl" />
                </div>
                <span className="text-2xl font-bold">
                  Vendas
                </span>
              </NavLink>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                <MdWebStories className="text-[#66593c] text-3xl" />
              </div>
              <span className="text-2xl font-bold">
                Stories
              </span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                <FaCogs className="text-[#66593c] text-3xl" />
              </div>
              <span className="text-2xl font-bold">
                Config
              </span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                <MdEmail className="text-[#66593c] text-3xl" />
              </div>
              <span className="text-2xl font-bold">
                Contato
              </span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white border-2 border-neutral-200 rounded-full p-2">
                <MdLogout className="text-[#66593c] text-3xl" />
              </div>
              <span className="text-2xl font-bold">
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Sidenav;