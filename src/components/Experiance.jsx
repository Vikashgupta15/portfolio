import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.svg";
import reactjs from "../../public/reactjs.png";
import expressjs from "../../public/Expressjs.jpeg";
import tailwind from "../../public/tailwind.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: expressjs,
      name: "ExpressJS",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 8,
      logo: tailwind,
      name: "Tailwind CSS",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-800">Hand-On Experiance</h1>
        <p className="  ">
          I've hand-on experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
