import DefaultLayout from "@/layouts/default";
import HomeView from "@/views/home";
import RulesView from "@/views/rules";
import WinnersView from "@/views/winners";
import { BrowserRouter, Route, Routes } from "react-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/rules" element={<RulesView />} />
          <Route path="/winners" element={<WinnersView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
