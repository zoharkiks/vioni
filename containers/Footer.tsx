import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-bg1 px-6 py-16 md:px-12 lg:px-36">
      <div className="flex grid-cols-2 flex-col lg:grid">
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 text-2xl font-bold text-black">
            <img src={images.logo.src} alt="" />
            <div className="">Vioni</div>
          </div>

          <p className="my-6 w-[80%] !leading-[180%] text-text md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            sed.
          </p>

          <div className="mb-10 flex space-x-6">
            <Icon
              className="h-10 w-10 text-primary"
              icon="entypo-social:facebook-with-circle"
            />
            <Icon
              className="h-10 w-10 text-primary"
              icon="entypo-social:twitter-with-circle"
            />
            <Icon
              className="h-10 w-10 text-primary"
              icon="entypo-social:instagram-with-circle"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-12 gap-x-20  md:grid-cols-3">
          <div className="flex flex-col">
            <ul className="space-y-6 text-lg text-text">
              <h2 className="mb-7 text-xl font-bold text-black ">About</h2>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
              <li>
                <a href="">Consult</a>
              </li>
              <li>
                <a href="">Schedule</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <ul className="space-y-6 text-lg text-text">
              <h2 className="mb-7 text-xl font-bold text-black ">Contact</h2>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <ul className="space-y-6 text-lg text-text">
              <h2 className="mb-7 text-xl font-bold text-black ">Legals</h2>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Disclaimer</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
