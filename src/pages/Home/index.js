import Banner from "components/Banner";
import Title from "components/Title";
import MoviesList from "components/MoviesList";

const Home = () => {
  return (
    <>
      <Banner image={window.screen.width > 960 ? "desktop2" : "mobile2"} />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <MoviesList />
    </>
  );
};

export default Home;
