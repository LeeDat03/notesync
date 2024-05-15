"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";

import { useNavbarScroll } from "@/hooks/use-navbar-scroll";

import Logo from "./logo";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";
import { useRouter } from "next/navigation";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useNavbarScroll();
  const router = useRouter();

  return (
    <Navbar
      position="sticky"
      maxWidth="full"
      classNames={{
        wrapper: `p-2 md:p-4 flex items-center w-full z-[500] bg-white transition-all duration-100 ${
          scrollPosition && !isMenuOpen && "border-b-3 border-gray-200"
        }`,
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* LOGO + NAV-DESKTOP */}
      <NavbarContent justify="start">
        <Logo />
        <NavDesktop />
      </NavbarContent>

      {/* BUTTON */}
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
            <AuthLoading>
              <Spinner size="sm" />
            </AuthLoading>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button
                  size="sm"
                  variant="light"
                  color="primary"
                  className="text-sm font-semibold"
                >
                  Log In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm font-semibold"
                >
                  Get NoteSync Free
                </Button>
              </SignUpButton>
            </Unauthenticated>

            <Authenticated>
              <Button
                size="sm"
                color="primary"
                className="text-sm font-semibold"
                onClick={() => router.push("/documents")}
              >
                Enter NoteSync
              </Button>
              <UserButton
                signInUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: "32px", height: "32px" },
                  },
                }}
              />
            </Authenticated>
          </div>
        </div>
      </NavbarContent>

      {/* NAV MOBILE */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="p-2">
        <NavMobile setIsMenuOpen={setIsMenuOpen} />
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationMenu;
