import { Link } from "react-router";
import { navigationLinks } from "../../config/navigation";
import { ResolutionMenLogo } from "../logos/resolution-men";
import GirlsOnly from "../icons/girls-only";

export function Navbar() {
  const currentPathname = window.location.pathname;

  return (
    <>
      <nav className="px-[38px] py-[34px] w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-[180px] relative">
        <div className="flex h-5 w-46 fill-[#f1f1f1]">
          <ResolutionMenLogo />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 py-1">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.value}
              className={
                "uppercase tracking-wide text-xs text-white px-[22px] py-[12px] " +
                (link.value === currentPathname
                  ? "border-[1px] border-red-400"
                  : "")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div></div>

        <div className="hidden absolute lg:flex -top-4 right-0">
          <div className="relative">
            <div className="fill-[#ffd01f] -rotate-25 h-32 w-32 flex relative">
              <GirlsOnly />
              <div className="absolute text-[#ff62bd] w-full text-[29px] font-bold h-full flex flex-col items-center justify-center">
                <span className="-mb-4">Girls</span>
                <span>only!</span>
              </div>
            </div>
            <div className="top-0 -z-[1] left-0 h-32 w-32 flex absolute fill-[#00d6ff]">
              <GirlsOnly />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
