import React from "react";

const ChatDialog = () => {
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <div className="relative bg-[#ff61bd] p-4 rounded-xl shadow-lg max-w-xs">
        <div
          className="absolute bottom-[-12px] right-6 w-0 h-0 
                        border-t-12 border-t-[#ff61bd] 
                        border-l-16 border-l-transparent"
        />
        <div className="flex">
          <img
            src="/images/vadim.jpg"
            alt="Вадим"
            className="w-16 h-16 rounded-full mr-3"
          />
          <div className="flex flex-col py-2 gap-1">
            <p className="text-black uppercase tracking-wider text-[9px]">
              Здравствуйте!
              <br />
              Могу ли вам помочь?
            </p>

            <button className="border-none bg-[#d1509a] py-[4px] flex items-center px-[8px] rounded-lg justify-center">
              <span className="text-white text-[9px] uppercase tracking-wider">
                Начать диалог
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
