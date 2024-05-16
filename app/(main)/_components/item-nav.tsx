"use client";

import { useUser } from "@clerk/clerk-react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ItemNavProps {
  isSearch?: boolean;

  label: string;
  icon: LucideIcon;
}

const ItemNav = ({ isSearch, label, icon: Icon }: ItemNavProps) => {
  const { user } = useUser();

  return (
    <div
      role="button"
      className={clsx(
        "group min-h-[27px] text-sm w-full flex items-center font-medium text-gray-500 py-1 pl-2 pr-3 hover:bg-gray-200"
      )}
    >
      <div>
        <Icon className="shrink-0 mr-1 h-4" />
      </div>
      <span className="truncate text-base">{label}</span>

      {isSearch && (
        <kbd className="ml-auto pointer-events-none border border-gray-300 select-none text-[10px] p-1 opacity-100 rounded flex items-center">
          <span className="text-xs">⌘/Ctrl + K</span>
        </kbd>
      )}
    </div>
  );
};

export default ItemNav;
