import React from "react";

function Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`border-none cursor-pointer text-white bg-[#00d5ff] px-[16px] py-[8px] flex items-center rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
