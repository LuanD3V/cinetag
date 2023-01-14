import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoritosContext } from "context/Favoritos";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner image={window.screen.width > 960 ? "desktop1" : "mobile1"} />
      <Title>Meus Favoritos</Title>
      <section className={styles.favoritos}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;
