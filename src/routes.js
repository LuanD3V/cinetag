import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import FavoritosProvider from "./context/Favoritos";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <FavoritosProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
          </FavoritosProvider>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
