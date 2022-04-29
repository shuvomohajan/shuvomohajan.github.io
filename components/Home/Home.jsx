import Image from "next/image";
import styles from "./Home.module.css";
import Social from "./Social/Social";

const Home = () => {
    return (
        <div
            className={[
                "min-h-screen py-14 flex justify-center items-center text-center text-white bg-dark-700",
                styles.customBg,
            ].join(" ")}
            id="Home"
        >
            <div className="container px-4 md:px-14 mx-auto h-full">
                <Image
                    src="/shuvo.jpg"
                    height="150"
                    width="150"
                    className="object-cover rounded-full"
                    alt="Shuvo"
                    loading="eager"
                    priority="true"
                />
                <h1 className={styles.title}>
                    This is{" "}
                    <a
                        href="https://shuvomohajan.github.io/"
                        className="text-white"
                    >
                        Shuvo Mohajan
                    </a>
                </h1>

                <p className={styles.description}>
                    I&apos;m a{" "}
                    <code className={styles.code}>
                        Web <span>Developer & Designer</span>
                    </code>
                </p>

                <Social />

                <a
                    href="https://www.linkedin.com/in/shuvo-mohajan-76ba04142/"
                    rel="noreferrer"
                    className="mt-10 py-2.5 px-8 rounded-full font-bold bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition-all inline-block cursor-pointer"
                    target="_blank"
                >
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default Home;
