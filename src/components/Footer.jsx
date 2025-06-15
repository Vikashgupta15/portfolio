import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-slate-300">
        <div className="max-w-screen-2xl  container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 items-center space-x-3">
              <a
                href="https://www.facebook.com/vikash.sah.750983"
                target="_blank"
              >
                <FaSquareFacebook className="text-2xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikash-gupta-b77815309/"
                target="_blank"
              >
                <FaLinkedin className="text-2xl cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/golden_gupta_15/"
                target="_blank"
              >
                <FaInstagram className="text-2xl cursor-pointer" />
              </a>
              <a
                href="https://x.com/vikashguptaaa15"
                target="_blank"
              >
              <BsTwitterX />
              </a>
              <a href="https://t.me/Vikashguptaa" target="_blank">
                <FaTelegram className="text-2xl cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                Feel free to Connect me 
              </p>
              <p className="text-sm"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
