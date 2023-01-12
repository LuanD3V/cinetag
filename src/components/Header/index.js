import ItemsList from "../ItemsList";
import styles from "./Header.module.css";

const Header = () => {
  const menuList = [
    {
      nome: "Home",
      url: "./",
    },
    {
      nome: "Favoritos",
      url: "./favoritos",
    },
  ];
  return (
    <header className={styles.header}>
      <div>
        <span>Cinetag</span>
      </div>
      <nav>
        {menuList.map((item) => (
          <ItemsList key={item.nome} url={item.url}>
            {item.nome}
          </ItemsList>
        ))}
      </nav>
    </header>
  );
};

export default Header;
