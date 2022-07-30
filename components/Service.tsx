import React from "react";
import { Button } from "../components";
import { images } from "../constants";

const Service = ({text,order,image}) => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-x-20 ">
        <div className="flex max-w-[90%] flex-col  items-start  justify-center">
          <h1 className="mb-2.5 text-3xl font-extrabold !leading-[150%] lg:text-5xl lg:mb-5">
            {text}
          </h1>
          <p className="mb-7 leading-[180%] text-text lg:mb-12 lg:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui
            ut non ac habitant.
          </p>
          <Button text="Learn More"
          textColor='text-white'
          bgColor='bg-primary'
          />
        </div>

        <div className={`mt-16  flex items-center justify-center md:mt-0 ${order}`}>
          <img
            className=" w-full object-contain "
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Service;
