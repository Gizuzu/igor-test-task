import { useEffect, useState } from "react";
import { Link } from "react-router";

import { HomeWideLogo } from "@/components/logos/home-wide";
import { HomeSquareLogo } from "@/components/logos/home-square";
import Button from "@/components/ui/button";
import { routes } from "@/config/routes";

function HomeView() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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

        <Link to={routes.RULES} className="mt-8">
          <Button>
            <span className="text-white tracking-[.2rem] text-[21px] uppercase">
              Участвовать
            </span>
          </Button>
        </Link>
      </section>

      <span className="z-10 text-white uppercase text-xs tracking-widest absolute bottom-2 left-4">
        * нереальными
      </span>
    </>
  );
}

export default HomeView;
