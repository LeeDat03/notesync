"use client";

import { icons, images, sliderData } from "@/constants";
import Image from "next/image";

const Slider = () => {
  return (
    <ul className="flex justify-center items-center gap-6">
      {sliderData.map((item, index) => {
        return (
          <li className="" key={index}>
            <div className="flex flex-col items-center rounded-md px-4 py-2 border-2 border-gray-200 cursor-pointer shadow-sm w-[150px]">
              <div>
                <Image
                  src={item.icon}
                  alt="Engineering"
                  className="w-[70px] h-[70px]"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>

            <Image
              src={item.pageImage}
              alt="Page"
              className={`w-4/5 self-center shadow-lg hidden`}
            />
          </li>
        );
      })}
    </ul>

    // <li className="list-none flex flex-col gap-4">
    //   <div className="flex flex-col items-center rounded-md p-2 max-w-min border-2 border-gray-300">
    //     <Image
    //       src={icons.engineering}
    //       alt="Engineering"
    //       className="w-16 h-16"
    //     />
    //     <h3 className="text-lg font-semibold">Engineering</h3>
    //   </div>

    //   <Image
    //     src={images.EngineeringPage}
    //     alt="Page"
    //     className={`w-4/5 self-center shadow-lg hidden`}
    //   />
    // </li>
  );
};

export default Slider;
