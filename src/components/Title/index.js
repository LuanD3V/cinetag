import { Component } from "react";
import styles from "./Title.module.css";

const Title = ({ children, tagName }) => {
  Component = tagName || "h1";
  return (
    <div className={styles.title}>
      <Component>{children}</Component>
    </div>
  );
};

export default Title;
