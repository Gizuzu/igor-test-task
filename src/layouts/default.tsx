import { Outlet } from "react-router";

import { Navbar } from "@/components/navigation/navbar";
import ChatDialog from "@/components/navigation/chat-dialog";

function DefaultLayout() {
  return (
    <>
      <main className="max-w-[1200px] w-full mx-auto relative">
        <Navbar />

        <Outlet />
      </main>
      <ChatDialog />
    </>
  );
}

export default DefaultLayout;
