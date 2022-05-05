import { useState } from 'react';
// import styles from "./About.module.css";

const About = () => {
    const [skills] = useState([
        "Laravel",
        "PHP",
        "MySQL",
        "Livewire",

        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React",
        "AlpineJS",
        "TailwindCSS",
        "Bootstrap",

        "NodeJS",
        "MongoDB",

        "Git",
        "Linux",
    ]);

    return (
        <div className="py-14" id="About">
            <div className="container px-4 md:px-14 mx-auto">
                <h2 className="text-gray-700 font-bold text-4xl mb-16">
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
                    <div>
                        <p className="text-justify leading-7">
                            I’m a web developer & designer. I love technology
                            and I always enjoy learning new tech to improve my
                            skill and build something awesome.
                            <br /> <br />I have been working as a backend
                            Laravel developer for 4+ years now and I have also
                            used many side tools to build awesome user
                            interfaces and interactivity. I always Intend to
                            work in a challenging and competitive environment
                            where a strong sense of responsibility and
                            commitment is required, where the place of the work
                            provides potential avenues for learning, growing,
                            and achieving a top position in the hierarchy of the
                            organization.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-gray-700 font-semibold text-2xl mb-8">
                            Skills
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-auto">
                            {Array.isArray(skills) &&
                                skills.map((tech, index) => (
                                    <span
                                        key={`skill-${index}`}
                                        className="bg-rose-600 text-white py-1.5 px-4 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
