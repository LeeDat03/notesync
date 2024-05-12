import { images } from "@/constants";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const JoinSection = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-3 md:gap-4 lg:gap-5 items-center justify-center max-w-2xl text-wrap">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text__logo text-center">
          Join a global movement. <br />
          Unleash your creativity.
        </h2>
        <span className="text-sm md:text-base lg:text-lg text-center text-gray-500 px-5 md:px-0 md:max-w-md">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </span>

        <Button variant="light" color="secondary" size="md">
          Learn more <MoveRight className="-ml-2" />
        </Button>
      </div>

      <div className="flex justify-center items-start md:my-4 my-2">
        <Image
          src={images.Faces}
          alt="Face"
          className="w-full h-full object-contain max-w-5xl"
        />
      </div>

      <ul className="mx-auto max-w-5xl gap-3 md:gap-6 grid grid-cols-1 md:grid-cols-3 justify-center">
        <li className="p-3 md:p-6 bg-gray-200 rounded-lg">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            1M+
          </h4>
          <span className="font-semibold">community members</span>
        </li>
        <li className="p-3 md:p-6 bg-gray-200 rounded-lg">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            150+
          </h4>
          <span className="font-semibold">community groups</span>
        </li>
        <li className="p-3 md:p-6 bg-gray-200 rounded-lg">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            50+
          </h4>
          <span className="font-semibold">countries represented</span>
        </li>
      </ul>
    </>
  );
};

export default JoinSection;
