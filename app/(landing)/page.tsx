import React from "react";
import Hero from "./_components/hero";
import TeamSection from "./_components/team-section";

const LandingPage = () => {
  return (
    <main className="px-5 w-full">
      <section className="mt-16">
        <Hero />
      </section>
      <section className="mt-24 mb-80">
        <TeamSection />
      </section>
    </main>
  );
};

export default LandingPage;
