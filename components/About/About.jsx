import styles from "./About.module.css";

const About = () => {
  return (
    <div className="py-14" id="About">
      <div className="container px-4 md:px-14 mx-auto">
        <h2 className="text-gray-700 font-bold text-4xl mb-16">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6">
          <p className="text-justify leading-7">
            I’m a web developer & designer. I love technology and I always enjoy
            learning new tech to improve my skill and build something awesome.{" "}
            <br /> <br /> I have been working as a backend Laravel developer for
            4 years now and I have also used many side tools to build awesome
            user interfaces and interactivity. I always Intend to work in a
            challenging and competitive environment where a strong sense of
            responsibility and commitment is required, where the place of the
            work provides potential avenues for learning, growing, and achieving
            a top position in the hierarchy of the organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
