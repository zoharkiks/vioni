import React from "react";
import { Card, Newsletter, Service } from "../components";
import { images } from "../constants";

const Services = () => {
  return (
    <div className=" bg-bg1 py-32 px-6 m md:px-12 md:py-44 lg:px-36">
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-[2.2rem]">

      <Card text="Easy Access" />
      <Card text="Trusted" />
      <Card text="Secure" />
      </div>

      <div className=" space-y-32 flex flex-col mt-24 lg:mt-48 mb-28">

        <Service text='World-Class Ecosystem'
        order='first'
        image={images.feature1.src} />

<Service text='7-Days Free Trial Access'
        order='last'
        image={images.feature2.src} />

<Service text='Track Every Money Output'
        order='first'
        image={images.feature3.src} />
         
      </div>

  <Newsletter/>
  
    </div>
    
  );
};

export default Services;
