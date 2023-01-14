import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Container from "components/Container";
import FavoritosProvider from "context/Favoritos";
import Footer from "components/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
