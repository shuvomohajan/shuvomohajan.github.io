import Link from "./Link/Link";

const Aside = () => {
  return (
    <>
      <div className="p-8 text-white h-full">
        <h2 className="font-bold text-4xl">Shuvo <span className="bg-red-500 inline-block p-1"></span> </h2>
        <div className="flex flex-col justify-center h-full flex-1">
          <Link name="Home" />
          <Link name="About" />
          <Link name="Experience" />
          <Link name="Works" />
          <Link name="Contact" />
        </div>
      </div>
    </>
  );
};

export default Aside;
