import Logo from "../images/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  setTimeout(() => {
    setIsMounted(true);
  }, 500);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 flex justify-center w-full h-20 px-10 items-center transition-transform duration-1000 ease-in-out ${
        isMounted ? "translate-y-0" : "-translate-y-full"
      } tablet:justify-between laptop:px-36`}
    >
      <img src={Logo} alt="kondela-dron" className="w-64 h-fit drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] laptop:w-96" />
      <div className="w-fit hidden tablet:inline">
        <ul className="flex justify-end items-center h-full gap-5 text-[#352214]">
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-110">
            O nas
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-110">
            Projekty
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-110">
            Oferta
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-110">
            Kontakt
          </li>
        </ul>
      </div>
    </nav>
  );
}
