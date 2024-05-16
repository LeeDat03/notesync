"use client";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronsLeftRight, LogOut } from "lucide-react";
import React from "react";

const UserItem = () => {
  const { user } = useUser();

  return (
    <Dropdown>
      <DropdownTrigger>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-gray-300 transition"
        >
          <div className="flex items-center gap-x-2 max-w-[150px]">
            <Avatar isBordered src={user?.imageUrl} className="h-5 w-5" />

            <span className="line-clamp-1 font-semibold text-gray-600">
              {user?.fullName}&apos; NoteSync
            </span>
          </div>
          <ChevronsLeftRight className="h-5 w-5 ml-2 rotate-90 text-gray-500 " />
        </div>
      </DropdownTrigger>

      <DropdownMenu aria-label="profile dropdown">
        <DropdownItem key="profile" className="w-80" showDivider isReadOnly>
          <div>
            <p className="text-sm text-gray-600 mb-3">
              {user?.emailAddresses[0].emailAddress}
            </p>

            <div className="flex items-center gap-4 p-2">
              <Avatar isBordered src={user?.imageUrl} size="md" />
              <span className="text-base font-semibold text-gray-600">
                {user?.fullName}&apos; NoteSync
              </span>
            </div>
          </div>
        </DropdownItem>

        <DropdownItem key="logout" color="danger">
          <SignOutButton>
            <span className="flex items-center gap-2">
              <LogOut className="h-5 w-5" />
              Logout
            </span>
          </SignOutButton>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserItem;
