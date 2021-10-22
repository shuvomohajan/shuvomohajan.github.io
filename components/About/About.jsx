import Image from "next/image";
import styles from "./About.module.css";
import Social from "./Social/Social";

const About = () => {
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
          <a href="https://shuvomohajan.github.io/" className="text-white">
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
          href="https://wa.me/01838501660"
          rel="noreferrer"
          className="mt-10 py-2.5 px-8 rounded-full font-bold bg-red-500 inline-block cursor-pointer"
          target="_blank"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default About;
