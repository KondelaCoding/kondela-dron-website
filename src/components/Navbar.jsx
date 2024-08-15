import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="z-50 fixed top-0 left-0 flex justify-between w-full h-20 px-10 items-center laptop:px-36">
      <img src={Logo} alt="kondela-dron" className="w-64 h-fit drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] laptop:w-96" />
      <div className="w-fit hidden tablet:inline">
        <ul className="flex justify-end items-center h-full gap-5 text-[#352214]">
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white shadow-lg duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-125">
            O nas
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white shadow-lg duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-125">
            Projekty
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white shadow-lg duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-125">
            Oferta
          </li>
          <li className="px-6 py-2 text-md font-bold rounded-full bg-white shadow-lg duration-300 cursor-pointer laptop:text-xl desktop:text-2xl desktop:px-10 hover:scale-125">
            Kontakt
          </li>
        </ul>
      </div>
    </nav>
  );
}
