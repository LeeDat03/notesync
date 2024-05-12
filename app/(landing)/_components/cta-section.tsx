import { images } from "@/constants";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CtaSection = () => {
  return (
    <div className="border-b-2 border-gray-200 pb-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text__logo text-center md:tracking-wide">
          Get Started For Free
        </h2>
        <span className="mt-2 md:mt-4 text-gray-500 text-center text-sm md:text-base lg:text-xl px-5 md:px-0 leading-tight">
          Play around with it first. Pay and add your team later.
        </span>
      </div>

      <div className="my-4 md:my-6 flex gap-2 md:gap-4 items-center justify-center">
        <Button
          color="secondary"
          size="lg"
          className="font-semibold shadow-sm px-2 py-1 md:px-4 md:py-2 md:text-sm text-xs"
        >
          Try NoteSync Free
        </Button>
        <Button
          variant="light"
          color="secondary"
          size="lg"
          className="flex items-center font-semibold px-2 py-1 md:px-4 md:py-2 md:text-sm text-xs"
        >
          Get NoteSync Pro <MoveRight className="-ml-2" />
        </Button>
      </div>

      <div className="flex justify-center">
        <Image
          src={images.Cta}
          alt="Hero Image"
          className="object-contain max-w-5xl w-full md:w-3/5 h-auto drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default CtaSection;
