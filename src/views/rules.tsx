import QustionIcon from "@/components/icons/question";
import { HomeWideLogo } from "../components/logos/home-wide";
import { Navbar } from "../components/navigation/navbar";

function RulesView() {
  return (
    <>
      <main className="max-w-[1200px] w-full mx-auto">
        <Navbar />

        <section className="w-full flex flex-col items-center justify-center py-8">
          <span className="uppercase text-white mt-11 tracking-[0.14em] text-[21px]">
            Без паники, на самом деле всё очёнь просто, у нас есть два
            гигантских конкурса:
          </span>
        </section>

        <div className="absolute top-0 left-0 flex items-center justify-between h-screen w-full py-4 -z-[1]">
          <div className="h-[90vh] absolute w-[100vw] fill-[#ff62bd]">
            <QustionIcon />
          </div>
          <div className="h-[90vh] absolute w-[100vw] fill-[#00d6ff] rotate-180">
            <QustionIcon />
          </div>
        </div>
      </main>
    </>
  );
}

export default RulesView;
