import React from "react";
import Hero from "./_components/hero";
import TeamSection from "./_components/team-section";
import JoinSection from "./_components/join-section";
import CtaSection from "./_components/cta-section";
import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <main className="px-2 md:px-5 w-full">
      <section className="mt-12 md:mt-16 lg:mt-20">
        <Hero />
      </section>
      <section className="my-20 md:my-24 lg:my-32">
        <TeamSection />
      </section>
      <section className="my-20 md:my-32 lg:my-40">
        <JoinSection />
      </section>
      <section className="">
        <CtaSection />
      </section>

      <footer className="my-5">
        <Footer />
      </footer>
    </main>
  );
};

export default LandingPage;
