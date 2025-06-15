import React, { useState } from "react";
import pic from "../../public/VikashImage.webp";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const path = window.location.pathname;
  const name = "</> "
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    // {
    //   id: 3,
    //   text: "Portfolio",
    // },
    {
      id: 3,
      text: "Experiance",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-10  backdrop-blur-md bg-gradient-to-r from-slate-500 bg-opacity-20 shadow-xl ">
        <div className="flex justify-between items-center h-16 ">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-bold text-xl cursor-pointer text-blue-950">
              {}Code & Coffee ☕︎ <span className="text-blue-950 text-2xl">l</span>
              <p className="text-sm text-black"> {name}Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {path == "/reading"?

                    <a href={"/home"}>{text}</a>:
                  <Link
                  to={text}
                  // href="/Home"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  activeClass="active"
                  >
                    {text}
                  </Link>
                  }
                </li>
              ))}
              <a href={"/reading"}>Reading</a>
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  {path == "/reading"?

                    <a href={"/home"}>{text}</a>:
                  <Link
                  to={text}
                  // href="/Home"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  activeClass="active"
                  >
                    {text}
                  </Link>
                  }
                </li>
              ))}
              <a href={"/reading"}>Reading</a>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
