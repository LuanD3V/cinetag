import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  return (
    <>
      <Banner image={window.screen.width > 960 ? "desktop1" : "mobile1"} />
      <Title>Meus Favoritos</Title>
      <div className={styles.Favoritos}></div>
    </>
  );
};

export default Favoritos;
