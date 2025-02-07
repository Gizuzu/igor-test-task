import { Link } from "react-router";
import { navigationLinks } from "../../config/navigation";
import { ResolutionMenLogo } from "../logos/resolution-men";

export function Navbar() {
  const currentPathname = window.location.pathname;

  return (
    <>
      <nav className="px-[38px] py-[34px] w-full flex items-center gap-[180px]">
        <div className="flex h-5 w-46 fill-[#f1f1f1]">
          <ResolutionMenLogo />
        </div>
        <div className="flex items-center gap-10 py-1">
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
      </nav>
    </>
  );
}
