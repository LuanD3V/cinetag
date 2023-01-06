import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.text}>Desenvolvido por LuanD3V</span>
      </div>
      <div className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/luanfehenrique/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/img/fb.png"
            alt="Facebook"
            width={"16px"}
            height={"16px"}
            className="social"
          />
        </a>
        <a
          href="https://www.instagram.com/luanfehenrique/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/img/ig.png"
            alt="Instagram"
            width={"16px"}
            height={"16px"}
            className="social"
          />
        </a>
        <a href="https://twitter.com/LuanDS__" target="_blank" rel="noreferrer">
          <img
            src="/img/tw.png"
            alt="Twitter"
            width={"16px"}
            height={"16px"}
            className="social"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
