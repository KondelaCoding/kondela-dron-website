import { ArrowDownRight } from "react-feather";
import Picture1 from "../assets/images/pic1.jpg";
import Picture4 from "../assets/images/pic4.jpg";
import CtaButton from "./CtaButton";

export default function About() {
  return (
    <div className="bg-[#352214] pt-64 pb-32 flex flex-col gap-64">
      <div className="container flex flex-col gap-14">
        <h1 className="text-5xl text-center uppercase font-bold tablet:text-7xl">o nas</h1>
        <p className="text-justify text-xl max-w-4xl m-auto">
          Kondela Dron to firma specjalizująca się w profesjonalnym filmowaniu, fotografowaniu i inspekcjach z użyciem
          dronów. Obsługuje różne sektory, takie jak nieruchomości, budownictwo i energetyka, dostarczając wysokiej
          jakości materiały z powietrza oraz przeprowadzając inspekcje trudno dostępnych miejsc, zapewniając szybkie i
          bezpieczne rozwiązania.
        </p>
        <div>
          <img src={Picture4} alt="moje-zdjęcie" className="rounded-3xl" />
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
          <CtaButton />
        </div>
        <div className="w-full">
          <img src={Picture1} alt="moje-zdjęcie" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
