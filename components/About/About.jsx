import Image from "next/image";
import styles from "./About.module.css";
import Social from "./Social/Social";

const About = () => {
  return (
    <div
      className={[
        "min-h-screen py-14 flex justify-center items-center text-center text-white",
        styles.customBg,
      ].join(" ")}
    >
      <div className="container px-2 md:px-4 mx-auto h-full">
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
            Web <span>Designer & Developer</span>
          </code>
        </p>

        <Social />

        <a
          href="#"
          className="mt-10 py-2.5 px-8 rounded-full font-bold bg-red-500 inline-block cursor-pointer"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default About;
