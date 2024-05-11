import { images } from "@/constants";
import { Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CtaSection = () => {
  return (
    <div className="border-b-2 border-gray-200 pb-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold text__logo tracking-wide">
          Get Started For Free
        </h2>
        <span className=" mt-4 text-gray-500 text-center text-xl leading-tight">
          Play around with it first. Pay and add your team later.
        </span>
      </div>

      <div className="my-6 flex gap-4 items-center justify-center">
        <Button color="secondary" size="lg" className="font-semibold shadow-sm">
          Try NoteSync Free
        </Button>
        <Button
          variant="light"
          color="secondary"
          size="lg"
          className="font-semibold flex items-center"
        >
          Get NoteSync Pro <MoveRight className="-ml-2" />
        </Button>
      </div>

      <div className="flex justify-center gap-8">
        <Image
          src={images.Cta}
          alt="Hero Image"
          className="object-contain w-3/5 h-auto drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default CtaSection;
