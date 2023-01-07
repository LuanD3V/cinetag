import styles from "./MoviesList.module.css";
import movies from "../../json/db.json";
import Card from "../Card";
const MoviesList = () => {
  return (
    <section className={styles.moviesSection}>
      {movies.map((movie) => {
        return <Card {...movie} key={movie.id} />;
      })}
    </section>
  );
};

export default MoviesList;
