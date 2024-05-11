import { images } from "@/constants";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text__logo tracking-wide">
          Write,plan,organize,play
        </h1>
        <span className="max-w-md mt-4 font-semibold text-wrap text-center text-2xl leading-tight">
          Turn ideas into action with NoteSync AI-powered workspace.
        </span>
      </div>

      <div className="mt-8 flex gap-4 items-center justify-center">
        <Button color="secondary" size="lg" className="font-semibold shadow-sm">
          Get NoteSync Free
        </Button>
        <Button
          variant="light"
          color="secondary"
          size="lg"
          className="font-semibold"
        >
          Request A Demo <MoveRight />
        </Button>
      </div>

      <div className="flex justify-center gap-8">
        <Image
          src={images.OcWork}
          alt="Hero Image"
          className="object-contain w-[500px] h-auto drop-shadow-xl"
        />
        <Image
          src={images.OcOnLaptop}
          alt="Hero Image"
          className="object-contain w-[500px] h-auto drop-shadow-xl"
        />
      </div>
    </>
  );
};

export default Hero;
