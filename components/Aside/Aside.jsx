import Link from "./Link/Link";

const Aside = () => {
  return (
    <>
      <div className="p-8 text-white h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="font-bold text-4xl">
            Shuvo <span className="bg-red-500 inline-block p-1"></span>{" "}
          </h2>
          <div>
            <Link name="Home" />
            <Link name="About" />
            <Link name="Experience" />
            <Link name="Works" />
            <Link name="Contact" />
          </div>
          <p className="text-gray-400 text-sm">&copy;2021 Shuvo Mohajan</p>
        </div>
      </div>
    </>
  );
};

export default Aside;
