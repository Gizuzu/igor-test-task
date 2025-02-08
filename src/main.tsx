import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./providers/router.tsx";
import ChatDialog from "./components/navigation/chat-dialog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />

    <ChatDialog />
  </StrictMode>
);
