import React from "react";
import Slider from "./slider";

const TeamSection = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex items-center justify-center mb-4 md:mb-6 lg:mb-8 text__logo text-wrap text-center">
        Every team, side-by-side
      </h2>

      <Slider />
    </>
  );
};

export default TeamSection;
