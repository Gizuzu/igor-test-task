export function SmartPart() {
  return (
    <span className="text-[50px] sm:text-[80px] lg:text-[120px] flex items-center text-[#ffd01f] uppercase">
      Ум
      <span className="relative">
        н
        <img
          src="/images/sitting_women.svg"
          height="82"
          width="82"
          className="absolute top-1.5 sm:top-3 lg:top-4 scale-90 lg:scale-100"
        />
      </span>
      ые <span className="text-[#874cff] mx-auto">&</span>
    </span>
  );
}

export function BeautifulPart() {
  return (
    <span className="text-[50px] sm:text-[80px] lg:text-[120px] flex items-center uppercase text-[#ff62bd]">
      К
      <span className="relative">
        р
        <img
          src="/images/viselchak.svg"
          className="absolute top-4 sm:top-6 lg:top-9"
        />
      </span>
      асивые
    </span>
  );
}
