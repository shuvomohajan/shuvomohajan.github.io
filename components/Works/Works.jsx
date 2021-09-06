import { useState } from "react";
import styles from "./Works.module.css";

const Works = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      name: "PixelSensePark.com",
      link: "https://pixelSensePark.com/",
      description: "Portfolio & Proto Editing Solution",
    },
    {
      id: 2,
      name: "AonMart.net",
      link: "https://aonmart.net/",
      description:
        "Warehouse and Multi Store Inventory with Mobile App E-commerce",
    },
    {
      id: 3,
      name: "EsomoyBangla.com",
      link: "https://esomoybangla.com/",
      description: "Online News Portal",
    },
    {
      id: 4,
      name: "BoiOnlineBD.com",
      link: "https://boionlinebd.com/",
      description: "Book E-Commerce",
    },
    {
      id: 5,
      name: "Swaty Books",
      link: "https://sawtybooks.com/",
      description: "Audio Book Mobile App",
    },
    {
      id: 6,
      name: "GloLotto.org",
      link: "https://glolotto.org/",
      description: "Thai Lottery Game",
    },
  ]);

  return (
    <div className="min-h-screen py-14">
      <div className="container px-4 md:px-14 mx-auto">
        <h2 className="text-gray-700 font-bold text-4xl mb-16">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-6 lg:gap-8">
          {Array.isArray(works) &&
            works.map((work) => (
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                key={work.id}
                className={styles.card}
              >
                <h3 className="text-xl mb-5 font-semibold text-gray-600">
                  {work.name}
                </h3>
                <p className="text-gray-500">{work.description}</p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
