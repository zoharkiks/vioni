import React from "react";
import { Button } from "../components";
import { images } from "../constants";

const Hero = () => {
  return (
    <div className=" pt-14 pb-14 md:grid md:grid-cols-2 md:pl-12 lg:pl-36 px-6  ">
      <div className="flex  flex-col items-start  justify-center ">
        <h1 className="  mb-2.5 text-4xl max-w-lg font-extrabold !leading-[150%] lg:text-6xl lg:mb-5">
          Manage Your Finance Easily
        </h1>
        <p className="mb-7 leading-[180%] text-text lg:text-lg lg:mb-12 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing Nunc in turpis
          hendrerit pellentesque.
        </p>
        <Button text="Register Now" />
      </div>
      <div className="mt-16  flex items-center justify-center md:mt-0 ">
        <img className=" w-full object-contain " src={images.hero.src} alt="" />
      </div>
    </div>
  );
};

export default Hero;
