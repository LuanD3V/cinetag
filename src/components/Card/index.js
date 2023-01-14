import Title from "components/Title";
import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
const Card = ({ capa, titulo, id }) => {
  const { favorito, addFavorito } = useFavoritosContext();

  const verifyFavorito = favorito.some((fav) => fav.id === id);
  const icon = !verifyFavorito ? "favorite_outline" : "favorite";

  return (
    <div className={styles.card}>
      <a href={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.imgMovie} />
      </a>
      <Title tagName={"h2"}>{titulo}</Title>
      <button
        onClick={() => {
          addFavorito({ id, titulo, capa });
        }}
        className={styles.favorite}
      >
        <img src={`img/${icon}.svg`} alt="Favoritar Filme" />
      </button>
    </div>
  );
};

export default Card;
