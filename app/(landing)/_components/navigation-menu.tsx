"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <Navbar
      position="sticky"
      maxWidth="full"
      classNames={{
        wrapper: `p-2 md:p-4 flex items-center w-full z-10 bg-white transition-all duration-100 ${
          scrollPosition > 10 && "border-b-3 border-gray-200"
        }`,
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Image src="/icon.png" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold test text__logo">NoteSync</span>
        </Link>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex justify-between items-center"
        justify="end"
      >
        <div className="flex gap-3 h-full">
          <Button
            size="sm"
            variant="light"
            color="primary"
            className="text-sm font-semibold"
          >
            Request a demo
          </Button>

          <div className="self-center h-6 w-[1px] bg-gray-200"></div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="light"
              color="primary"
              className="text-sm font-semibold"
            >
              Log In
            </Button>
            <Button size="sm" color="primary" className="text-sm font-semibold">
              Get NoteSync Free
            </Button>
          </div>
        </div>
      </NavbarContent>

      {/* TODO: CHANGE CONTENT */}
      <NavbarMenu>
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
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationMenu;
