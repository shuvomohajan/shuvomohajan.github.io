import { useState } from "react";
import styles from "./Works.module.css";

const Works = () => {
    const [works] = useState([
        {
            id: 1,
            name: "Bit Integrations",
            link: "https://www.bitapps.pro/bit-integrations/",
            description: "Integration Plugin for WordPress",
            technology: ["React", "PHP", "WordPress"],
        },
        {
            id: 2,
            name: "PixelSensePark.com",
            link: "https://pixelSensePark.com/",
            description: "Portfolio & Proto Editing Solution",
            technology: ["Laravel", "TailwindCSS", "Vue"],
        },
        {
            id: 3,
            name: "AonMart.net",
            link: "https://aonmart.net/",
            description:
                "Warehouse and Multi Store Inventory with Mobile App E-commerce",
            technology: ["Laravel", "Livewire", "AlpineJS"],
        },
        {
            id: 4,
            name: "EsomoyBangla.com",
            link: "https://esomoybangla.com/",
            description: "Online News Portal",
            technology: ["Laravel"],
        },
    ]);

    return (
        <div className="min-h-screen py-14" id="Works">
            <div className="container px-4 md:px-14 mx-auto">
                <h2 className="text-gray-700 font-bold text-4xl mb-16">
                    Major Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-6 lg:gap-8">
                    {Array.isArray(works) &&
                        works.map((work) => (
                            <div
                                key={`work-${work.id}`}
                                className={styles.card}
                            >
                                <h3 className="text-xl mb-5 font-semibold text-gray-600 transition duration-200 ease-in-out">
                                    {work.name}
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    {work.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {Array.isArray(work.technology) &&
                                        work.technology.map((tech, index) => (
                                            <span
                                                key={`tag-${work.id * index}`}
                                                className="bg-gray-100 text-gray-700 py-1 px-2 rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
