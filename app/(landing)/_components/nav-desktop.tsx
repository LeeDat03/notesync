import React from "react";
import DropdownNavigation from "./dropdown-navigation";
import { dropdownData } from "@/constants";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex">
      {dropdownData.map((item) => {
        return (
          <DropdownNavigation
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
