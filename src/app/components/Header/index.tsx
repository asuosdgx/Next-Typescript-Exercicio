import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>GoTravel - Seu portal de informações sobre turismo.</h1>
      </Link>
      <nav>
        <Link href="/" className={styles.header__a}>
          Home
        </Link>
        <Link href="/destinos" className={styles.header__a}>
          Destinos
        </Link>
        <Link href="#" className={styles.header__a}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
