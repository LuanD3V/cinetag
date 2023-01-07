import Title from "components/Title";
import { useState } from "react";
import styles from "./Card.module.css";
const Card = ({ capa, titulo, link }) => {
  const [favorite, setFavorite] = useState("favorite_outline");

  const selectedFavorite = () => {
    favorite === "favorite"
      ? setFavorite("favorite_outline")
      : setFavorite("favorite");
  };

  return (
    <div className={styles.card}>
      <a href={link}>
        <img src={capa} alt={titulo} className={styles.imgMovie} />
      </a>
      <Title tagName={"h2"} style={styles.titleSecundary}>
        {titulo}
      </Title>
      <img
        onClick={selectedFavorite}
        src={`img/${favorite}.svg`}
        alt="Favoritar Filme"
        className={styles.favorite}
      />
    </div>
  );
};

export default Card;
