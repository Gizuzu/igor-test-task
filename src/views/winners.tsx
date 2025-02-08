import CheckIcon from "@/components/icons/check";
import HeartIcon from "@/components/icons/heart";
import {
  BeautifulPart,
  SmartPart,
} from "@/components/shared/smart-and-beautiful";
import { beautifulWinners, smartWinners } from "@/config/winners";

type WinnerType = (typeof beautifulWinners)[0];

function WinnersList({
  winners,
  icon: Icon,
  iconColor,
}: {
  winners: WinnerType[];
  icon: React.FC;
  iconColor: string;
}) {
  return (
    <div className="flex flex-col w-fit text-white">
      {winners.map((winner, index) => (
        <div
          key={index}
          className="text-[15px] uppercase flex items-center gap-4 w-full"
        >
          <span>{index + 1}.</span>
          <span className="ml-4 tracking-widest">{winner.name}</span>
          <span className="ml-auto flex items-center gap-2 px-2 bg-black/10">
            <span className={`fill-[${iconColor}] flex h-3 w-3`}>
              <Icon />
            </span>{" "}
            <span className={`font-bold text-[${iconColor}]`}>
              {winner.value}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function WinnersView() {
  return (
    <>
      <section className="w-full flex flex-col items-center relative h-[600px] overflow-visible px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SmartPart />
            <WinnersList
              winners={smartWinners}
              icon={CheckIcon}
              iconColor="#ffcf1f"
            />
          </div>
          <div>
            <BeautifulPart />
            <WinnersList
              winners={beautifulWinners}
              icon={HeartIcon}
              iconColor="#ff62bd"
            />
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
