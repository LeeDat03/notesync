import { NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const NavMobile = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2
                ? "warning"
                : index === menuItems.length - 1
                ? "danger"
                : "foreground"
            }
            href="#"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </>
  );
};

export default NavMobile;
