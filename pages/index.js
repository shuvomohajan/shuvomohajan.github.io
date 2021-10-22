import Head from "next/head";
import About from "../components/About/About";
import Works from "../components/Works/Works";
import Aside from "../components/Aside/Aside";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shuvo Mohajan | Portfolio</title>
        <meta name="description" content="This is Shuvo Mohajan. I'm a Web Developer & Designer" />
        <meta name="keywords" content="Shuvo Mohajan, Shuvo, Mohajan, Laravel, Developer, Laravel Developer, Web Developer, Web Designer, Bangladesh" />
        <meta name="author" content="Shuvo Mohajan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="block md:flex">
          <Aside />
        <div className="w-full">
          <About />
          <Works />
        </div>
      </div>
    </>
  );
}
