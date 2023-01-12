import Title from "components/Title";
import { useState } from "react";
import styles from "./Card.module.css";
const Card = ({ capa, titulo, link, id }) => {
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
      <Title tagName={"h2"}>{titulo}</Title>
      <button onClick={selectedFavorite} className={styles.favorite}>
        <img src={`img/${favorite}.svg`} alt="Favoritar Filme" />
      </button>
    </div>
  );
};

export default Card;
