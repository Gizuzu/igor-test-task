import { Navbar } from "../components/navigation/navbar";
import CheckIcon from "@/components/icons/check";
import HeartIcon from "@/components/icons/heart";

const smartWinners = [
  {
    name: "SASHA PEREVEZENTSEVA",
    value: 23,
  },
  {
    name: "wildangel69",
    value: 18,
  },
  {
    name: "NATASHA KONSTANTINOVA",
    value: 16,
  },
  {
    name: "DRUNKEVERYDAY87",
    value: 14,
  },
  {
    name: "OLESYA SHELKOVENKO",
    value: 10,
  },
  {
    name: "SUMMERWAVESLOVE",
    value: 9,
  },
  {
    name: "SLIPKNOTWHYNOT76",
    value: 7,
  },
  {
    name: "tRATATAPIUPIUPIUA",
    value: 5,
  },
  {
    name: "RASKRUTKAKAUNTOV2019",
    value: 3,
  },
  {
    name: "OLGA PETROVA",
    value: 2,
  },
];
const beautifulWinners = [
  {
    name: "SASHA PEREVEZENTSEVA",
    value: 387,
  },
  {
    name: "wildangel69",
    value: 278,
  },
  {
    name: "NATASHA KONSTANTINOVA",
    value: 205,
  },
  {
    name: "DRUNKEVERYDAY87",
    value: 174,
  },
  {
    name: "OLESYA SHELKOVENKO",
    value: 136,
  },
];

function WinnersView() {
  return (
    <>
      <main className="max-w-[1200px] w-full mx-auto">
        <Navbar />

        <section className="w-full flex flex-col items-center relative h-[600px] overflow-visible px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <span className="text-[80px] lg:text-[120px] flex items-center text-[#ffd01f] uppercase">
                Ум
                <span className="relative">
                  н
                  <img
                    src="/images/sitting_women.svg"
                    height="82"
                    width="82"
                    className="absolute top-3 lg:top-4 scale-90 lg:scale-100"
                  />
                </span>
                ые <span className="text-[#874cff] mx-auto">&</span>
              </span>

              <div className="flex flex-col w-fit text-white">
                {smartWinners.map((winner, index) => (
                  <div
                    key={index}
                    className="text-[15px] uppercase flex items-center gap-4 w-full"
                  >
                    <span>{index + 1}.</span>
                    <span className="ml-4 tracking-widest">{winner.name}</span>
                    <span className="ml-auto flex items-center gap-2 px-2 bg-black/10">
                      <span className="fill-[#ffcf1f] flex h-3 w-3">
                        <CheckIcon />
                      </span>{" "}
                      <span className="font-bold text-[#ffcf1f]">
                        {winner.value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[80px] lg:text-[120px] flex items-center uppercase text-[#ff62bd]">
                К
                <span className="relative">
                  р
                  <img
                    src="/images/viselchak.svg"
                    className="absolute top-6 lg:top-9"
                  />
                </span>
                асивые
              </span>

              <div className="flex flex-col w-fit text-white">
                {beautifulWinners.map((winner, index) => (
                  <div
                    key={index}
                    className="text-[15px] uppercase flex items-center gap-4 w-full"
                  >
                    <span>{index + 1}.</span>
                    <span className="ml-4 tracking-widest">{winner.name}</span>
                    <span className="ml-auto flex items-center gap-2 px-2 bg-black/10">
                      <span className="fill-[#ff62bd] flex h-3 w-3">
                        <HeartIcon />
                      </span>{" "}
                      <span className="font-bold text-[#ff62bd]">
                        {winner.value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            src="/images/standing_women.svg"
            className="absolute -bottom-30 rotate-15 -z-[1] left-30 scale-400"
          />
          <img
            src="/images/viselchak_yellow.svg"
            className="hidden lg:block absolute bottom-10 -rotate-25 -scale-y-400 -scale-x-400 -z-[1] left-150"
          />
          <img
            src="/images/shh_women.svg"
            className="absolute bottom-40 scale-y-400 scale-x-400 -z-[1] -right-10"
          />
        </section>
      </main>
    </>
  );
}

export default WinnersView;
