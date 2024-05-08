import React, { ReactNode } from "react";
import NavigationMenu from "./_components/navigation-menu";

const LandingLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <NavigationMenu />
      {/* <Test /> */}
      {children}
    </main>
  );
};

export default LandingLayout;
