import CheckIcon from "@/components/icons/check";
import HeartIcon from "@/components/icons/heart";
import {
  BeautifulPart,
  SmartPart,
} from "@/components/shared/smart-and-beautiful";
import { beautifulWinners, smartWinners } from "@/config/winners";

function WinnersView() {
  return (
    <>
      <section className="w-full flex flex-col items-center relative h-[600px] overflow-visible px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SmartPart />

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
            <BeautifulPart />

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
    </>
  );
}

export default WinnersView;
