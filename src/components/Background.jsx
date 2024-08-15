import Background1 from "../images/background-1.png";
import Background2 from "../images/background-2.png";
import Background3 from "../images/background-3.png";
import Background4 from "../images/background-4.png";
import Background5 from "../images/background-5.png";

export default function Background() {
  return (
    <div className="aspect-video w-screen relative mt-20">
      <img src={Background5} alt="background-5" className="absolute top-0" />
      <img src={Background4} alt="background-4" className="absolute top-0" />
      <img src={Background3} alt="background-3" className="absolute top-0" />
      <div className="flex justify-center items-center">
        <h1 className="text-center text-4xl font-black drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] uppercase tablet:text-7xl tablet:mt-10 laptop:text-9xl laptop:mt-32 desktop:text-[10rem] desktop:mt-44">
          zmień <br />
          perspektywę
        </h1>
      </div>
      <img src={Background2} alt="background-2" className="absolute top-0" />
      <img src={Background1} alt="background-1" className="absolute top-0" />
    </div>
  );
}
