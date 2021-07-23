import styles from "./Works.module.css";

const Works = () => {
  return (
    <div className="min-h-screen py-14">
      <div className="container px-4 md:px-14 mx-auto">
        <h2 className="text-gray-700 font-bold text-4xl mb-16">Recent Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-6 lg:gap-8">
          <a
            href="https://pixelSensePark.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">PixelSensePark.com</h3>
            <p className="text-gray-500">Protfolio & Proto Editing Solution</p>
          </a>

          <a
            href="https://aonmart.abaacorp.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">AonMart.net</h3>
            <p className="text-gray-500">
              Wirehouse and Multi Store Inventory with Mobile App E-commerce
            </p>
          </a>

          <a
            href="https://esomoybangla.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">EsomoyBangla.com</h3>
            <p className="text-gray-500">Online News Portal</p>
          </a>

          <a
            href="https://rabbiitfirm.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">RabbiITFirm.com</h3>
            <p className="text-gray-500">Protfolio and SEO Solution</p>
          </a>

          <a
            href="https://boionlinebd.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">BoiOnlineBD.com</h3>
            <p className="text-gray-500">Book E-Commerce</p>
          </a>

          <a
            href="https://glolotto.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">GloLotto.org</h3>
            <p className="text-gray-500">Thai Lottery Game</p>
          </a>

          <a
            href="https://apnarwallet.com/exchanges.php"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">ApnarWallet.com</h3>
            <p className="text-gray-500">Money Exchange</p>
          </a>

          <a
            href="https://sawtybooks.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h3 className="text-xl mb-5 font-semibold text-gray-600">Swaty Books</h3>
            <p className="text-gray-500">Audio Book Mobile App</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
