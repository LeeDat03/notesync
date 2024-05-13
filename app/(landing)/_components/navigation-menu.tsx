"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

import Logo from "./logo";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { isAuthenticated, isLoading } = useConvexAuth();

  // TODO: move to hooks
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
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
        wrapper: `p-2 md:p-4 flex items-center w-full z-[500] bg-white transition-all duration-100 ${
          scrollPosition > 10 && !isMenuOpen && "border-b-3 border-gray-200"
        }`,
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <Logo />
        <NavDesktop />
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
            {isLoading && <Spinner size="sm" />}

            {!isLoading && !isAuthenticated && (
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
            )}

            {!isLoading && !isAuthenticated && (
              <SignUpButton mode="modal" signInForceRedirectUrl="/">
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm font-semibold"
                >
                  Get NoteSync Free
                </Button>
              </SignUpButton>
            )}

            {isAuthenticated && (
              <>
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm font-semibold"
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
              </>
            )}
          </div>
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="p-2">
        <NavMobile isAuthenticated={isAuthenticated} isLoading={isLoading} />
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationMenu;
