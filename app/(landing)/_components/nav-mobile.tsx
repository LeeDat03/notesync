"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/clerk-react";

import { dropdownData } from "@/constants";
import DropdownMobile from "./dropdown-mobile";

const NavMobile = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClick = () => setIsMenuOpen(false);
  const router = useRouter();

  return (
    <ul className="flex flex-col lg:hidden ">
      {dropdownData.map((item) => (
        <DropdownMobile
          key={item.title}
          title={item.title}
          items={item.items}
          onClick={onClick}
        />
      ))}

      <div className="mt-6 flex flex-col gap-2 self-stretch">
        <Authenticated>
          <Button
            size="sm"
            color="primary"
            className="text-sm font-semibold"
            onClick={() => router.push("/documents")}
          >
            Enter NoteSync
          </Button>

          <SignOutButton>
            <Button size="sm" color="danger" className="text-sm font-semibold">
              Sign out
            </Button>
          </SignOutButton>
        </Authenticated>

        <Unauthenticated>
          <SignUpButton mode="modal">
            <Button size="sm" color="primary" className="text-sm font-semibold">
              Get NoteSync Free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button
              size="sm"
              color="secondary"
              className="text-sm font-semibold"
            >
              Log In
            </Button>
          </SignInButton>
        </Unauthenticated>
      </div>
    </ul>
  );
};

export default NavMobile;
