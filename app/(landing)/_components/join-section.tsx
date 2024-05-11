import { images } from "@/constants";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const JoinSection = () => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-5 items-center justify-center max-w-2xl text-wrap">
        <h2 className="text-5xl font-bold text__logo">
          Join a global movement. <br />
          Unleash your creativity.
        </h2>
        <span className="text-lg text-center text-gray-500">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </span>

        <Button variant="light" color="secondary" size="lg">
          Learn more <MoveRight className="-ml-2" />
        </Button>
      </div>

      <div className="flex justify-center items-start my-4">
        <Image src={images.Faces} alt="Face" />
      </div>

      <ul className="mx-auto gap-6 grid grid-cols-3 justify-center w-4/5">
        <li className="p-6 bg-gray-200 rounded-lg">
          <h4 className="text-5xl font-bold text-secondary">1M+</h4>
          <span className="font-semibold">community members</span>
        </li>
        <li className="p-6 bg-gray-200 rounded-lg">
          <h4 className="text-5xl font-bold text-secondary">150+</h4>
          <span className="font-semibold">community groups</span>
        </li>
        <li className="p-6 bg-gray-200 rounded-lg">
          <h4 className="text-5xl font-bold text-secondary">50+</h4>
          <span className="font-semibold">countries represented</span>
        </li>
      </ul>
    </>
  );
};

export default JoinSection;
