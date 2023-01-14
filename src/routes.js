import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Player from "components/Player";
import PageNotFound from "components/PageNotFound";
import App from "pages/App";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="favoritos" element={<Favoritos />}></Route>
            <Route path=":id" element={<Player />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
