import QustionIcon from "@/components/icons/question";
import {
  BeautifulPart,
  SmartPart,
} from "@/components/shared/smart-and-beautiful";

const smartRules = [
  <>
    1. Смело подписывайся на{" "}
    <b>
      {">>"} наш инстаграм {"<<"}
    </b>
  </>,
  "2. Быстрее всех и правильно отвечай на вопросы",
  "3. 10 умниц получат отличительные призы",
];
const beautifulRules = [
  "1. Посети любую из 5 стран, не выходя из офиса",
  <>
    2. Запили селфи с хештегом <b>#loremipsum</b>, чтоб залайкали
  </>,
  "3. 5 красавиц тоже получат призы",
];

function RulesView() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-8 px-4">
        <span className="uppercase text-white mt-11 tracking-[0.14em] text-[21px]">
          Без паники, на самом деле всё очёнь просто, у нас есть два гигантских
          конкурса:
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SmartPart />

            <ul>
              {smartRules.map((rule, index) => (
                <li key={index} className="mb-2">
                  <span className="bg-[#ffcf1f] tracking-widest text-[15px] uppercase px-1">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <BeautifulPart />

            <ul>
              {beautifulRules.map((rule, index) => (
                <li key={index} className="mb-2">
                  <span className="bg-[#ff62bd] tracking-widest text-[15px] uppercase px-1">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="border-none bg-[#ff61bd] py-[8px] flex items-center px-[16px] mt-16 p-6 rounded-md">
          <span className="text-white tracking-[.2rem] text-[21px] uppercase">
            Узнать счёт
          </span>
        </button>
      </section>

      <div className="absolute top-0 left-0 w-full py-4 -z-[1]">
        <div className="h-[40vh] w-[70vw] -top-30 -left-36 absolute fill-[#ff62bd]">
          <QustionIcon />
        </div>
        <div className="h-[40vh] w-[70vw] top-0 -right-20 -scale-y-100 -scale-x-100 translate-y-[86vh] absolute fill-[#00d6ff]">
          <QustionIcon />
        </div>
      </div>
    </>
  );
}

export default RulesView;
