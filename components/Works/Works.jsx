import styles from './Works.module.css'

const Works = () => {
  return (
    <div className="min-h-screen py-14">
      <div className="container px-2 md:px-4 mx-auto">
        <h2 className={styles.second_title}>
          Working <span>Projects</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 mt-10">
          <a
            href="https://pixelSensePark.com/"
            target="_blank"
            className={styles.card}
          >
            <h3>PixelSensePark.com</h3>
            <p>Protfolio & Proto Editing Solution</p>
          </a>

          <a
            href="https://aonmart.net/"
            target="_blank"
            className={styles.card}
          >
            <h3>AonMart.net</h3>
            <p>
              Wirehouse and Multi Store Inventory with Mobile App E-commerce
            </p>
          </a>

          <a
            href="https://esomoybangla.com/"
            target="_blank"
            className={styles.card}
          >
            <h3>EsomoyBangla.com</h3>
            <p>Online News Portal</p>
          </a>

          <a
            href="https://rabbiitfirm.com/"
            target="_blank"
            className={styles.card}
          >
            <h3>RabbiITFirm.com</h3>
            <p>Protfolio and SEO Solution</p>
          </a>

          <a
            href="https://boionlinebd.com/"
            target="_blank"
            className={styles.card}
          >
            <h3>BoiOnlineBD.com</h3>
            <p>Book E-Commerce</p>
          </a>

          <a
            href="https://glolotto.org/"
            target="_blank"
            className={styles.card}
          >
            <h3>GloLotto.org</h3>
            <p>Thai Lottery Game</p>
          </a>

          <a
            href="https://apnarwallet.com/exchanges.php"
            target="_blank"
            className={styles.card}
          >
            <h3>ApnarWallet.com</h3>
            <p>Money Exchange</p>
          </a>

          <a
            href="https://apnarwallet.com/exchanges.php"
            target="_blank"
            className={styles.card}
          >
            <h3>Swaty Books</h3>
            <p>Audio Book Mobile App</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
