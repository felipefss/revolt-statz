import React from "react";
import styles from "./styles.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a className="btn btn-secondary btn-lg" href="#">
        Novo Campeonato
      </a>
      <a className="btn btn-secondary btn-lg" href="#">
        Historico
      </a>
      <a className="btn btn-secondary btn-lg" href="#">
        Stats
      </a>
    </nav>
  );
};

export default Navbar;
