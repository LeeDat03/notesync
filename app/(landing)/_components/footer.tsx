import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <span className="text-sm text-gray-400">
        © 2024 NoteSync. Copyright by DatLee.
      </span>

      <div>
        <Link
          href="#"
          className="px-2 py-1 hover:underline  focus:underline text-sm text-gray-400 "
        >
          Privacy policy
        </Link>
        <Link
          href="#"
          className="px-2 py-1 hover:underline  focus:underline text-sm text-gray-400 "
        >
          Term & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
