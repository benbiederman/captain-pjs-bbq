import styles from "../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  function emailContact(e) {
    if (e.type === "click" || e.key === "Enter") {
      window.location = "mailto:brian@captainpjsbbq.com";
    }
  }

  function phoneContact(e) {
    if (e.type === "click" || e.key === "Enter") {
      window.location = "sms:9207703933";
    }
  }

  function facebookIcon(e) {
    if (e.type === "click" || e.key === "Enter") {
      window.open("https://www.facebook.com/captainpjsbbq");
    }
  }

  function instagramIcon(e) {
    if (e.type === "click" || e.key === "Enter") {
      window.open("https://www.instagram.com/captainpjsbbq/");
    }
  }

  function twitterIcon(e) {
    if (e.type === "click" || e.key === "Enter") {
      window.open("https://twitter.com/captainpjsbbq");
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h3>Let's Talk</h3>
        <div
          tabIndex={0}
          className={styles.contactOption}
          onClick={phoneContact}
          onKeyDown={phoneContact}
        >
          <img src="/icons/phone.svg" alt="telephone icon" />
          <p>715.579.8511</p>
        </div>
        <div
          tabIndex={0}
          className={styles.contactOption}
          onClick={emailContact}
          onKeyDown={emailContact}
        >
          <img src="/icons/email.svg" alt="email icon" />
          <p>brian@captainpjsbbq.com</p>
        </div>
      </div>
      <div className={styles.navigation}>
        <h3>Navigate</h3>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/Menu">
          <a>Menu</a>
        </Link>
        <Link href="/Catering">
          <a>Catering</a>
        </Link>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className={styles.followUs}>
        <h3>Follow us</h3>
        <div className={styles.followIcons}>
          <img
            src="icons/facebook.png"
            alt="Facebook icon"
            tabIndex={0}
            onClick={facebookIcon}
            onKeyDown={facebookIcon}
          />
          <img
            src="icons/twitter.png"
            alt="Twitter icon"
            tabIndex={0}
            onClick={twitterIcon}
            onKeyDown={twitterIcon}
          />
          <img
            src="icons/instagram.png"
            alt="Instagram icon"
            tabIndex={0}
            onClick={instagramIcon}
            onKeyDown={instagramIcon}
          />
        </div>
      </div>
      <p className={styles.copyright}>Captain PJ's BBQ &copy; {year}</p>
    </footer>
  );
};

export default Footer;
