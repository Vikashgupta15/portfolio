import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl text-slate-700 container mx-auto px-4 md:px-32 my-20"
    >
      <div className="space-y-4 ">
        <h1 className="text-4xl text-center font-bold mb-5">About</h1>
        <p className=" mt-20">
          I am a highly motivated and skilled Full Stack Developer with hands-on
          experience in building scalable web applications using the MERN stack
          (MongoDB, Express.js, React.js, Node.js). I have developed several
          real-world projects that showcase my expertise in both front-end and
          back-end development.
          <p className="mt-4">
            Currently, I am expanding my capabilities into mobile app
            development using React Native. I am deeply passionate about solving
            complex problems, and I actively practice Data Structures and
            Algorithms (DSA) to strengthen my logical thinking and coding
            skills.
          </p>
          <p className="mt-4">
            I enjoy learning new technologies, facing new challenges, and
            creating useful solutions. My strong technical knowledge and habit
            of continuous learning help me do development work with confidence
            and dedication."
          </p>
        </p>
        <br />
        <h1 className="text-blue-800 font-semibold text-2xl">Education</h1>
        <span className="text-slate-700">
          <h1 className="mt-3">
            <h1 className=" text-lg font-semibold">
              Bachelor OF Computer Application (BCA)
            </h1>{" "}
            College:- Baba Banda Singh Bahadur
          </h1>
          <h1 className="mt-3">
            <h1 className=" text-lg font-semibold">12th</h1> College:- Thakur
            Yogal Kishore College, Sitamarhi
          </h1>
          <h1 className="mt-3">
            <h1 className=" text-lg font-semibold">10th</h1> College:- +2 Aadrsh
            High School Bachopatti, Sitamarhi
          </h1>
        </span>
        <br />
        <br />
        <h1 className="text-blue-800 font-semibold text-2xl">
          Skills & Expertise
        </h1>
        <span className="font-semibold">
          <h1 className="mt-3">HTML | CSS | JavaScript</h1>
          <h1 className="mt-3">MERN Stack (MongoDB , Express-js , React-js , Node-js) </h1>
        </span>
        <br />
        <h1 className="text-blue-800 font-semibold text-2xl">Project</h1>
        <span className="">
          <span className="">
            <h2 className="text-2xl font-semibold mt-2">01.</h2>
            <h2 className="text-lg font-semibold mt-2">
              LocalShop - (MERN Stack Web-Application)
            </h2>
            <h1 className="mt-1">
              <b className="text-md">Tech Stack : </b> Node.js, Express.js,
              React.js, MongoDB, Cloudinar
            </h1>
            <p className="mt-3">
              <b className="text-lg">{">> "}</b>Developed a full-stack
              application to help users discover local shops based on location
              and category. <br />
              <b className="text-lg">{">> "}</b>Implemented user authentication,
              image uploads for shop components, and responsive UI with
              filtering/search.
              <br />
              <b className="text-lg">{">> "}</b>Enabled shop owners to upload
              and manage shop-related content easily through a dedicated portal.
              <br />
              <b className="text-lg">{">> "}</b>Focused on performance
              optimization and clean UX for seamless navigation and interaction.
            </p>
          </span>
          <div className="mt-10"></div>
          <span className="">
            <h2 className="text-2xl font-semibold mt-2">02.</h2>
            <h2 className="text-lg font-semibold mt-2">
              ChatApp - (Real-Time Messaging Web-Application)
            </h2>
            <h1 className="mt-1">
              <b className="text-md">Tech Stack : </b> Node.js, Express.js,
              React.js, Socket.io, MongoDB
            </h1>
            <p className="mt-3">
              <b className="text-lg">{">> "}</b>Built a real-time chat
              application with private messaging features. <br />
              <b className="text-lg">{">> "}</b>Integrated Socket.io for live
              chat updates and MongoDB for message storage and user data.
              <br />
              <b className="text-lg">{">> "}</b>Designed a clean and responsive
              front-end UI <br />
              <b className="text-lg">{">> "}</b>Ensured secure login, logout,
              and protected chat rooms with proper session management.
            </p>
          </span>
          <div className="mt-10"></div>
          <span className="">
            <h2 className="text-2xl font-semibold mt-2">03.</h2>
            <h2 className="text-lg font-semibold mt-2">
              Laptop-Shop - (Custom E-Commerce Web-Application)
            </h2>
            <h1 className="mt-1">
              <b className="text-md">Tech Stack : </b> Node.js, Express.js,
              React.js, MongoDB, Cloudinar
            </h1>
            <p className="mt-3">
              <b className="text-lg">{">> "}</b>Built a single-vendor e-commerce
              platform for a local laptop shop owner to showcase and manage
              products online.
              <br />
              <b className="text-lg">{">> "}</b>Developed an intuitive admin
              dashboard allowing the shopkeeper to add, update, and delete
              laptop listings easily.
              <br />
              <b className="text-lg">{">> "}</b>Implemented secure
              authentication and product image uploads for efficient inventory
              management.
              <br />
              <b className="text-lg">{">> "}</b>Designed a clean, responsive Ul
              tailored specifically for the client's business needs.
            </p>
          </span>
        </span>
        <br />
        <br />
        <h1 className="text-blue-800 font-semibold text-2xl">
          Mission Statement
        </h1>
        <p>
          I am expanding my capabilities into mobile app development using React
          Native. I am deeply passionate about solving complex problems, and I
          actively practice Data Structures and Algorithms (DSA) to strengthen
          my logical thinking and coding skills.
        </p>
      </div>
    </div>
  );
}

export default About;
