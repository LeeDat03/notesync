"use client";

import React from "react";
import Image from "next/image";
import { Button, Spinner } from "@nextui-org/react";
import { SignInButton } from "@clerk/clerk-react";

import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";

import { MoveRight } from "lucide-react";
import { images } from "@/constants";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text__logo md:tracking-wide justify-center flex flex-wrap">
          <span>Write,</span>
          <span>plan,</span>
          <span>organize,</span>
          <span>play</span>
        </h1>
        <span className="md:max-w-md mt-4 font-semibold text-wrap text-center md:text-lg text-gray-400 lg:text-2xl leading-tight">
          Turn ideas into action with NoteSync AI-powered workspace.
        </span>
      </div>

      <div className="mt-8 mb-6 flex gap-2 lg:gap-4 items-center justify-center">
        <AuthLoading>
          <Spinner size="md" />
        </AuthLoading>

        <Unauthenticated>
          <SignInButton mode="modal">
            <Button
              color="secondary"
              className="font-semibold shadow-sm px-2 py-1 md:px-4 md:py-2 md:text-sm text-xs"
            >
              Get NoteSync Free
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button
              variant="light"
              color="secondary"
              className="font-semibold flex items-center px-2 py-1 md:px-4 md:py-2 md:text-sm text-xs"
            >
              Request A Demo <MoveRight className="-ml-1" />
            </Button>
          </SignInButton>
        </Unauthenticated>

        <Authenticated>
          <Button
            color="secondary"
            className="font-semibold flex items-center px-2 py-1 md:px-4 md:py-2 md:text-sm text-xs"
          >
            Enter NoteSync <MoveRight className="-ml-1" />
          </Button>
        </Authenticated>
      </div>

      <div className="flex justify-center gap-4 md:gap-8">
        <Image
          src={images.OcWork}
          alt="Hero Image"
          className="object-contain w-[300px] md:w-[350px] lg:w-[450px] h-auto drop-shadow-xl"
        />
        <Image
          src={images.OcOnLaptop}
          alt="Hero Image"
          className="object-contain hidden md:block md:w-[350px] lg:w-[450px] h-auto drop-shadow-xl"
        />
      </div>
    </>
  );
};

export default Hero;
