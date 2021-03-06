import { useState } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";

const Aside = () => {
    const [menus] = useState([
        {
            name: "Home",
        },
        {
            name: "About",
        },
        {
            name: "Experience",
        },
        {
            name: "Works",
        },
        // {
        //     name: "Contact",
        // },
    ]);

    return (
        <aside className="w-72 h-screen absolute md:sticky -left-full md:left-0 top-0 bg-dark-700 border-r border-gray-800">
            <div className="p-8 text-white h-full">
                <div className="flex flex-col justify-between h-full">
                    <h2 className="font-bold text-4xl">
                        Shuvo{" "}
                        <span className="bg-rose-600 inline-block p-1"></span>{" "}
                    </h2>
                    <div>
                        {Array.isArray(menus) &&
                            menus.map((menu, index) => (
                                <SidebarLink name={menu.name} key={index} />
                            ))}
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy;2022 Shuvo Mohajan
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
