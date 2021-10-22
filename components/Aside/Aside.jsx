import { useState } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";

const Aside = () => {
  const [menus, setMenus] = useState([
    {
      name: "Home",
      isActive: true,
    },
    {
      name: "About",
      isActive: false,
    },
    {
      name: "Experience",
      isActive: false,
    },
    {
      name: "Works",
      isActive: false,
    },
    {
      name: "Contact",
      isActive: false,
    },
  ]);
  return (
    <aside className="w-72 h-screen absolute md:sticky -left-full md:left-0 top-0 bg-dark-700 border-r border-gray-800">
      <div className="p-8 text-white h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="font-bold text-4xl">
            Shuvo <span className="bg-red-500 inline-block p-1"></span>{" "}
          </h2>
          <div>
            {Array.isArray(menus) &&
              menus.map((menu, index) => (
                <SidebarLink name={menu.name} isActive={menu.isActive} key={index} />
              ))}
          </div>
          <p className="text-gray-400 text-sm">&copy;2021 Shuvo Mohajan</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
