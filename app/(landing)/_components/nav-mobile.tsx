import React from "react";
import { Button } from "@nextui-org/react";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";

import { dropdownData } from "@/constants";
import DropdownMobile from "./dropdown-mobile";

const NavMobile = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClick = () => setIsMenuOpen(false);

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
          <Button size="sm" color="primary" className="text-sm font-semibold">
            Enter NoteSync
          </Button>

          <SignOutButton>
            <Button size="sm" color="danger" className="text-sm font-semibold">
              Sign out
            </Button>
          </SignOutButton>
        </Authenticated>

        <Unauthenticated>
          <Button size="sm" color="primary" className="text-sm font-semibold">
            Get NoteSync Free
          </Button>
          <SignInButton
            mode="modal"
            forceRedirectUrl={process.env.NEXT_PUBLIC_WEBSITE_URL! || "/"}
          >
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
