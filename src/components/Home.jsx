import React from "react";

import pic from "../../public/VikashImage.png";

import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import Resume from "./Resume";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-6xl  md:h-screen container mx-auto px-4 pb-10 md:px-20 my-16 md:pt-12 text-  backdrop-blur-md bg-gradient-to-r from-slate-5  to-blue-80 bg-opacity-60 shadow-sm"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div>
              <span className="text-xl text-blue-950">Welcome In My Feed </span>
              <span className="text-xl text-red-900 font-bold">: )</span>
            </div>
            <div className="flex space-x-1 text-2xl md:text-4xl text-blue-950">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-900 font-bold "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-md md:text-md text-justify text-blue-950 ">
              I am a highly motivated and skilled Full Stack Developer with
              hands-on experience in building scalable web applications using
              the MERN stack (MongoDB, Express.js, React.js, Node.js). I have
              developed several real-world projects that showcase my expertise
              in both front-end and back-end development.
            </p>
            <div>
              <div className="flex gap-4 mt-4">
                {/* View Resume Button */}
                <Resume />
              </div>
            </div>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between text-sky-900 space-y-10 md:space-y-0   ">
              <div className="  space-y-3 ">
                <h1 className="font-bold text-center  ">Available on</h1>
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="https://www.facebook.com/vikash.sah.750983"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vikash-gupta-b77815309/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/golden_gupta_15/"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Vikashguptaa" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-3">
                <h1 className="font-bold text-center ">Currently working on</h1>
                <div className="flex space-x-6 ">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-45 shadow-lg"></div> */}

          <div className="md:w-1/2 md:ml-48 md:mt-10 mt- mb-5 order-1 flex items-center justify-center ">
            <div className="text-center">
              <div className="md:w-72 md:h-72 w-60 h-60 mb-4 rounded-[70px] rounded-b-xl rounded-tr-[60px] rounded-br-[130px]  flex items-center justify-center mt-10 bg-gradient-to-r transform flex items-center justify-center p-2  rotate-45 shadow-lg overflow-hidden border-spacing-10 border-slate-100 border from-blue-800 to-sky-700 ">
                <div className="w-full h-full rounded-[70px] rounded-b-xl rounded-tr-[60px] rounded-br-[120px]  flex items-center justify-center mt-5 bg-gradient-to-r transfo rotate- shadow-lg overflow-hidden from-blue-950 to-sky-900 border-spacing-1 border-slate-800 border bg-transparent ">
                  <img src={pic} className="-rotate-45 h-72 w-96  " alt="" />
                </div>
              </div>
              <ReactTyped
                className="mt-8 text-2xl text-blue-950 font-semibold text-center"
                strings={["V i k a s h - g u p t a."]}
                typeSpeed={40}
                backSpeed={50}
                loop={false}
              />
              {/* <p className="mt-8 text-2xl text-blue-950 font-semibold">V i k a s h - g u p t a.</p> */}
              <p className="mt-2 text-xs text-blue-950">
                {"</>"} FullStack Web Devloper
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
