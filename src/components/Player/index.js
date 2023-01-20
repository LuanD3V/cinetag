import Banner from "components/Banner";
import PageNotFound from "components/PageNotFound";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Player.module.css";

const Player = () => {
  const parametros = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/luand3v/cinetag-api/movies?id=${parametros.id}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const movie = movies.find((movie) => {
    return movie.id === Number(parametros.id);
  });

  if (!movie) {
    return <PageNotFound />;
  }

  return (
    <>
      <Banner image={window.screen.width > 960 ? "desktop3" : "mobile3"} />
      <Title>Assista seus Filmes Favoritos</Title>
      <section className={styles.player}>
        <iframe
          width="100%"
          height="100%"
          src={movie.link}
          title={movie.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
