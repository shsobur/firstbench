import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { GiStoneTower } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-[#303947] shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-[#ffffff]"
              >
                Firstbench
              </a>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-300 text-2xl"
                  aria-label="toggle menu"
                >
                  {!isOpen ? <IoMdMenu /> : <RxCross2 />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <AiOutlineHome /> Deshboard
                </a>

                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <BsStars /> FirstGuru
                </a>

                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <GiStoneTower /> TownHall
                </a>

                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <ImPower /> AI Evalution
                </a>

                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <VscGraphLine /> Performance
                </a>

                <a
                  href="#"
                  className="flex justify-start items-center gap-2 px-3 py-2 mx-3 mt-2 text-lg text-gray-400 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-[#30c7c2]"
                >
                  <TbNotes /> Mock Test
                </a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className="hidden mx-4 text-2xl text-gray-200 transition-colors duration-300 transform lg:block hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                  aria-label="show notifications"
                >
                  <IoMdNotificationsOutline />
                </button>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-gray-700 lg:hidden">Khatab wedaa</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
