import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "./Logo";
import logo from "../assest/PT Shop_transparent-.png";
const Header = () => {
  const navBarList = [
    {
      _id: 1,
      title: "Home",
      link: "",
    },
    {
      _id: 2,
      title: "About",
      link: "/aboutus",
    },
    {
      _id: 3,
      title: "Contact",
      link: "/contact",
    },
    {
      _id: 4,
      title: "Blog",
      link: "/blog",
    },
  ];
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="h-full container mx-auto flex items-center  justify-between ">
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
          <div>
            {showMenu && (
              <ul className="flex items-center w-auto z-50 p-0 gap-2">
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      exact={link === ""}
                      key={_id}
                      className={({ isActive }) =>
                        `flex font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 ${
                          isActive ? "text-black font-bold underline" : ""
                        }`
                      }
                      to={link}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <div className="w-[80%] h-full relative">
                  <div className="w-full h-full bg-primeColor p-6">
                    <img className="w-28 mb-6" src={Logo} alt="logoLight" />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
