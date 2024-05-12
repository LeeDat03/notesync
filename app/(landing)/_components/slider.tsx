"use client";

import { sliderData } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <ul className="max-w-5xl mx-auto flex flex-wrap items-center justify-between relative gap-2 lg:gap-6">
        {sliderData.map((item, index) => {
          return (
            <li
              key={index}
              className={clsx(
                "flex flex-1 flex-col md:gap-1 items-center rounded-md px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 border-2 border-gray-200 shadow-sm transition-all cursor-pointer duration-300 ease-in-out hover:bg-gray-200 ",
                isSelected === index && "bg-gray-200"
              )}
              onClick={() => setIsSelected(index)}
            >
              <div>
                <Image
                  src={item.icon}
                  alt="Engineering"
                  className="lg:w-[70px] lg:h-[70px] md:w-[40px] md:h-[40px] hidden md:block"
                />
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                {item.title}
              </h3>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-col items-center justify-center relative ">
        {sliderData.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.pageImage}
              alt="Page"
              className={clsx(
                "max-w-[1024px] w-full max-h-[640px] shadow-2xl transition-all duration-500 ease-in-out absolute top-0",
                index === isSelected ? "opacity-100 " : "opacity-0"
              )}
            />
          );
        })}

        <div className="max-[450px]:h-[250px] max-sm:h-[350px] max-md:h-[450px] max-lg:h-[550px] lg:h-[640px]"></div>
      </div>
    </>
  );
};

export default Slider;
