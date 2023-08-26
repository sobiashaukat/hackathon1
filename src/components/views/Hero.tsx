import React from "react";
import { Badge } from "components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import header from "public/header.webp";
import Baztaar from "/public/Baztar.png";
import Bustle from "/public/Bustle.png";
import InStyle from "/public/InStyle.png";
import Vercel from "/public/vercel.svg";

const Hero = () => {
  return (
    <section className="flex py-6">
      {/*Left Div*/}
      <div className="flex-1 space-y-6 items-stretch item justify-start md:space-y-12 lg:space-y-20 container">
        <div>
          <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 ">
            Badge
          </Badge>

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
        </div>
        <Button>Start Shopping</Button>
        <div className="flex items-center justify-between space-x-4 mt-auto ">
          <Image alt="Baztar" src={Baztaar} className=" w-24 h-10" />
          <Image alt="Bustle" src={Bustle} className=" w-24 h-10" />

          <Image alt="InStyle" src={InStyle} className=" w-24 h-10" />
          <Image alt="Vercel" src={Vercel} className=" w-24 h-12" />
        </div>
      </div>

      {/*Right Div*/}
      <div className="flex-1 justify-end md:flex hidden">
        <Image src={header} alt="image" />
      </div>
    </section>
  );
};
export default Hero;
