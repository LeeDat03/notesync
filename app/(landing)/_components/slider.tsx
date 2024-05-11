"use client";

import { sliderData } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <ul className="flex items-center justify-center gap-6 relative">
        {sliderData.map((item, index) => {
          return (
            <>
              <li key={index} className="flex flex-col">
                <div
                  className={clsx(
                    "flex flex-col gap-1 items-center rounded-md px-4 py-2 border-2 border-gray-200 cursor-pointer shadow-sm w-[150px] transition-all duration-300 ease-in-out hover:bg-gray-200 ",
                    isSelected === index && "bg-gray-200"
                  )}
                  onClick={() => setIsSelected(index)}
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt="Engineering"
                      className="w-[70px] h-[70px]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </li>
            </>
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
                "max-w-[1024px] max-h-[640px] shadow-2xl transition-all duration-500 ease-in-out absolute top-0",
                index === isSelected ? "opacity-100 " : "opacity-0"
              )}
            />
          );
        })}
        <div className="w-[1024] h-[640px]"></div>
      </div>
    </>
  );
};

export default Slider;
