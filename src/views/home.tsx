import { useEffect, useState } from "react";
import { HomeWideLogo } from "../components/logos/home-wide";
import { Navbar } from "../components/navigation/navbar";
import { HomeSquareLogo } from "@/components/logos/home-square";

function HomeView() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="max-w-[1200px] w-full mx-auto relative">
        <Navbar />

        <section className="w-full flex flex-col items-center justify-center py-8">
          <div className="flex flex-col tracking-widest text-[21px] items-center gap-1 text-white lg:-mb-18">
            <span className="uppercase">О май гад!</span>

            <span className="uppercase">
              Да это <span className="lg:ml-14">же самая настоящая</span>
            </span>
            <span className="uppercase text-wrap flex justify-center">
              8мартовская
              <span className="ml-2 lg:ml-28">интеллектуальная викторина</span>
            </span>
          </div>
          {currentWidth >= 1200 ? <HomeWideLogo /> : <HomeSquareLogo />}
          <div className="flex flex-col tracking-widest text-[21px] items-center gap-1 text-white mt-6">
            <span className="uppercase">С реально сложными вопросами</span>
            <span className="uppercase">
              и <span className="text-[#00d6ff]">нереальными*</span> призами
            </span>
          </div>

          <button className="border-none bg-[#00d5ff] py-[8px] flex items-center px-[16px] mt-8 p-6 rounded-md">
            <span className="text-white tracking-[.2rem] text-[21px] uppercase">
              Участвовать
            </span>
          </button>
        </section>

        <span className="z-10 text-white uppercase text-xs tracking-widest absolute bottom-2 left-4">
          * нереальными
        </span>
      </main>
    </>
  );
}

export default HomeView;
