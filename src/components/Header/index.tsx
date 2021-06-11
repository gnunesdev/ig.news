import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="ig.news" />
        </Link>
        <nav>
          <a className={styles.linkActive}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
