import Title from "components/Title";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <section className={styles.pageNotFound}>
      <Title>Ops!</Title>
      <p>Página não encontrada.</p>
    </section>
  );
};

export default PageNotFound;
