import { HomeWideLogo } from "../components/logos/home-wide";
import { Navbar } from "../components/navigation/navbar";

function HomeView() {
  return (
    <>
      <main className="max-w-[1200px] w-full mx-auto">
        <Navbar />

        <section className="w-full flex flex-col items-center justify-center py-8">
          <div className="flex flex-col tracking-widest text-[21px] items-center gap-1 text-white -mb-18">
            <span className="uppercase">О май гад!</span>
            {/* Костыль, можно задуматься об использовании индентов или переспанить части текста с марджином */}
            <span className="uppercase">
              Да это &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; же самая
              настоящая
            </span>
            <span className="uppercase">
              8мартовская
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              интеллектуальная викторина
            </span>
          </div>
          <HomeWideLogo />
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
      </main>
    </>
  );
}

export default HomeView;
