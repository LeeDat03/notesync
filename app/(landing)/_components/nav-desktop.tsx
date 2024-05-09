import React from "react";
import DropdownDesktop from "./dropdown-desktop";
import { dropdownData } from "@/constants";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex gap">
      {dropdownData.map((item) => {
        return (
          <DropdownDesktop
            key={item.title}
            title={item.title}
            items={item.items}
          />
        );
      })}
    </ul>
  );
};

export default NavDesktop;
