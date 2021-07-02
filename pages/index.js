import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container px-2 md:px-4 mx-auto">
      <Head>
        <title>Shuvo Mohajan | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg_design}></div>
      <div className={styles.bg_design2}></div>

      <main className="min-h-screen py-14 text-center">
        <p>Hey There!</p>
        <h1 className={styles.title}>
          This !s <a href="https://shuvomohajan.github.io/">Shuvo Mohajan</a>
        </h1>

        <p className={styles.description}>
          I'm a{" "}
          <code className={styles.code}>
            Web <span>Designer & Developer</span>
          </code>
        </p>

        <h2 className={styles.second_title}>
          Working <span>Projects</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 mt-10">
          <a href="https://pixelSensePark.com/" target="_blank" className={styles.card}>
            <h3>PixelSensePark.com</h3>
            <p>Protfolio & Proto Editing Solution</p>
          </a>

          <a href="https://aonmart.net/" target="_blank" className={styles.card}>
            <h3>AonMart.net</h3>
            <p>Wirehouse and Multi Store Inventory with Mobile App E-commerce</p>
          </a>

          <a href="https://esomoybangla.com/" target="_blank" className={styles.card}>
            <h3>EsomoyBangla.com</h3>
            <p>Online News Portal</p>
          </a>

          <a href="https://rabbiitfirm.com/" target="_blank" className={styles.card}>
            <h3>RabbiITFirm.com</h3>
            <p>Protfolio and SEO Solution</p>
          </a>

          <a href="https://boionlinebd.com/" target="_blank" className={styles.card}>
            <h3>BoiOnlineBD.com</h3>
            <p>Book E-Commerce</p>
          </a>

          <a href="https://glolotto.org/" target="_blank" className={styles.card}>
            <h3>GloLotto.org</h3>
            <p>Thai Lottery Game</p>
          </a>

          <a href="https://apnarwallet.com/exchanges.php" target="_blank" className={styles.card}>
            <h3>ApnarWallet.com</h3>
            <p>Money Exchange</p>
          </a>

          <a href="https://apnarwallet.com/exchanges.php" target="_blank" className={styles.card}>
            <h3>Swaty Books</h3>
            <p>Audio Book Mobile App</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://twitter.com/shuvo_mohajan" target="_blank" rel="noopener noreferrer">
          &copy; Reserved By Shuvo Mohajan{" "}
        </a>
      </footer>
    </div>
  );
}
