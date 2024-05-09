import { dropdownData } from "@/constants";
import React from "react";
import DropdownMobile from "./dropdown-mobile";
import { Button } from "@nextui-org/react";

const NavMobile = () => {
  return (
    <ul className="flex flex-col lg:hidden ">
      {dropdownData.map((item) => (
        <DropdownMobile
          key={item.title}
          title={item.title}
          items={item.items}
        />
      ))}

      <div className="mt-6 flex flex-col gap-2 self-stretch">
        <Button size="md" color="primary" className="text-sm font-semibold">
          Get NoteSync Free
        </Button>
        <Button
          size="md"
          variant="bordered"
          color="primary"
          className="text-sm font-semibold"
        >
          Log In
        </Button>
      </div>
    </ul>
  );
};

export default NavMobile;
