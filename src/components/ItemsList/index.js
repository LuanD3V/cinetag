import { Link } from "react-router-dom";
import styles from "./ItemsList.module.css";

const ItemsList = ({ url, children }) => {
  return (
    <Link to={url} className={styles.itemsList}>
      {children}
    </Link>
  );
};

export default ItemsList;
