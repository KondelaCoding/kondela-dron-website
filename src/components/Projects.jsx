import { ArrowDownRight } from "react-feather";
import Picture1 from "../assets/images/pic1.jpg";
import Picture4 from "../assets/images/pic4.jpg";
import CtaButton from "./CtaButton";

export default function Projects() {
  return (
    <div className="bg-[#ffd3bc] pt-64 pb-32 flex flex-col gap-64 text-black">
      <div className="container flex flex-col gap-14">
        <h1 className="text-5xl text-center uppercase font-bold tablet:text-7xl">projekty</h1>
        <p className="text-justify text-xl max-w-4xl m-auto">MASONRY WALL HERE</p>
        <div className="overflow-hidden aspect-[3/4] tablet:aspect-auto">
          <img src={Picture4} alt="moje-zdjęcie" className="rounded-3xl h-full object-cover m-auto laptop:max-w-7xl" />
        </div>
      </div>
      <div className="container flex flex-col gap-14 laptop:flex-row">
        <div className="w-full flex flex-col justify-between gap-14 laptop:p-10">
          <div className="flex gap-3 laptop:mb-0">
            <p className="uppercase text-xl">o mnie</p>
            <ArrowDownRight size={28} />
          </div>
          <p className="text-justify text-xl">
            Jestem pasjonatem biegania, które codziennie pomaga mi zachować równowagę między pracą a życiem osobistym.
            Prowadzę firmę Kondela Dron, specjalizującą się w filmowaniu, fotografowaniu i inspekcjach z użyciem dronów.
            Wcześniej byłem żołnierzem, co nauczyło mnie dyscypliny, wytrwałości i podejmowania szybkich decyzji -
            umiejętności, które teraz wykorzystuję w biznesie.
          </p>
          <CtaButton color="red" />
        </div>
        <div className="overflow-hidden aspect-[3/4] tablet:aspect-auto">
          <img src={Picture1} alt="moje-zdjęcie" className="rounded-3xl h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
