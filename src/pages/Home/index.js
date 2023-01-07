import Footer from "components/Footer";
import Header from "components/Header";
import Banner from "components/Banner";
import Title from "components/Title";
import MoviesList from "components/MoviesList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner image={window.screen.width > 960 ? "desktop2" : "mobile2"} />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <MoviesList />
      <Footer />
    </>
  );
};

export default Home;
