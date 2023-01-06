import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner image={window.screen.width > 960 ? "desktop2" : "mobile2"} />
      {console.log(window.screen.width)}
      <Footer />
    </>
  );
};

export default Home;
