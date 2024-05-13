import { dropdownData } from "@/constants";
import React from "react";
import DropdownMobile from "./dropdown-mobile";
import { Button, Spinner } from "@nextui-org/react";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";

const NavMobile = ({
  isAuthenticated,
  isLoading,
}: {
  isAuthenticated: boolean;
  isLoading: boolean;
}) => {
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
        <Button size="sm" color="primary" className="text-sm font-semibold">
          {isAuthenticated ? "Enter NoteSync" : "Get NoteSync Free"}
        </Button>

        {!isLoading && !isAuthenticated && (
          <SignInButton mode="modal" signUpForceRedirectUrl="/">
            <Button
              size="sm"
              color="secondary"
              className="text-sm font-semibold"
            >
              Log In
            </Button>
          </SignInButton>
        )}

        {!isLoading && isAuthenticated && (
          <SignOutButton>
            <Button size="sm" color="danger" className="text-sm font-semibold">
              Sign out
            </Button>
          </SignOutButton>
        )}
      </div>
    </ul>
  );
};

export default NavMobile;
