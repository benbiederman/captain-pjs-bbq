import react, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  function toggleNav(e) {
    if (e.key === "Enter" || e.type === "click") {
      setNavActive(!navActive);
    }
  }

  function takeHome(e) {
    if (e.key === "Enter" || e.type === "click") {
      window.location = "/";
    }
  }

  return (
    <div className={styles.navigation}>
      <div
        className={styles.branding}
        tabIndex={0}
        onClick={takeHome}
        onKeyDown={takeHome}
      >
        <img src="/favicon.png" />
        <h1>Captain PJ's BBQ</h1>
      </div>
      <div
        className={
          navActive ? styles.burgerActive + " " + styles.burger : styles.burger
        }
        onClick={toggleNav}
        onKeyDown={toggleNav}
        tabIndex={0}
      >
        <div className={styles.burger1}></div>
        <div className={styles.burger2}></div>
        <div className={styles.burger3}></div>
      </div>
      <nav className={navActive ? styles.navActive : null}>
        <Link href="/">
          <a onClick={toggleNav} onKeyDown={toggleNav}>
            Home
          </a>
        </Link>
        <Link href="/Menu">
          <a onClick={toggleNav} onKeyDown={toggleNav}>
            Menu
          </a>
        </Link>
        <Link href="/Catering">
          <a onClick={toggleNav} onKeyDown={toggleNav}>
            Catering
          </a>
        </Link>
        <Link href="/Contact">
          <a onClick={toggleNav} onKeyDown={toggleNav}>
            Contact
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
