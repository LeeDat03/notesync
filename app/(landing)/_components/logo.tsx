import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 mr-4">
      <Image src="/icon.png" alt="Logo" width={40} height={40} />
      <span className="text-2xl font-bold test text__logo">NoteSync</span>
    </Link>
  );
};

export default Logo;
