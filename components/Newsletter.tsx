import React from "react";
import { Icon } from "@iconify/react";

import { Button } from "./";

const Newsletter = () => {
  return (
    <div className="rounded-[30px] bg-primary px-6 pt-12 pb-10 text-white lg:px-64 lg:py-20 ">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl  font-extrabold !leading-[150%] lg:text-5xl">
          Subscribe to Our Newsletter For Weekly Article Update.
        </h2>
        <p className="mt-8 mb-10 lg:text-lg">
          We have a finance-related blog so we can share our thoughts and
          routines on our blog which is updated weekly. We won't spam you, we
          promise.
        </p>
        <form
          className=" flex w-full flex-col items-center justify-between lg:flex-row lg:space-x-5 "
          action=""
        >
          <div className="mb-11  flex flex-1 items-center justify-center space-x-2 rounded-xl border-[1px] border-[#E3E3E3] bg-white bg-opacity-10 p-5 lg:mb-0">
            <Icon className="h-7 w-7" icon="ant-design:mail-outlined" />
            <input
              className=" bg-[#7468F9] outline-none placeholder:text-white md:text-lg  "
              placeholder="Enter Your Email Address"
              type="email"
              name=""
              id=""
            />
          </div>
          <Button
            text="Subscribe"
            bgColor="bg-white  "
            textColor="text-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
