import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className="nav">
        <li className="nav-item">
          <Link href="/new-championship">
            <a className="nav-link">Novo Campeonato</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/history">
            <a className="nav-link">Historico</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Stats</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
