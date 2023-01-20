import styles from "./MoviesList.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/luand3v/cinetag-api/movies")
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <section className={styles.moviesSection}>
      {movies.map((movie) => {
        return <Card {...movie} key={movie.id} />;
      })}
    </section>
  );
};

export default MoviesList;
