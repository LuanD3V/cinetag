import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
