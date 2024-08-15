import { Mail, Send } from "react-feather";
import { useState } from "react";

export default function CtaButton({ color }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex gap-3 flex-col items-center tablet:items-baseline">
      <p>Zmień swoją perspektywę</p>
      <button
        className={`flex justify-center items-center gap-3 py-3 pl-12 pr-20 rounded-full text-2xl w-fit duration-300 hover:bg-white active:opacity-70 active:scale-95 active:duration-100 ${
          color === "red" ? "bg-[#ff0000] text-white hover:text-black" : "bg-[#ffc525] text-black"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>Skontaktuj się</p>
        <Mail
          className={`absolute duration-300 ${isHovered ? "translate-x-[200px] opacity-0" : "translate-x-[100px]"}`}
        />
        <Send
          className={`absolute duration-300 ${
            isHovered ? "translate-x-[100px] opacity-100" : "translate-x-[200px] opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
