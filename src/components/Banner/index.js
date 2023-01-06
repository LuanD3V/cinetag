import styles from "./Banner.module.css";

const Banner = ({ image }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('img/${image}.webp')` }}
    ></div>
  );
};

export default Banner;
