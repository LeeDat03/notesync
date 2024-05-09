"use client";

import { NavbarMenuItem } from "@nextui-org/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DropdownMobile = ({
  title,
  items,
}: {
  title: string;
  items: {
    href: string;
    title: string;
    description?: string;
    imageSrc?: StaticImageData;
  }[];
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <NavbarMenuItem className="flex flex-col px-2 py-4 border-t-2 border-collapse border-gray-300 transition">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <p className="text-xl font-semibold">{title}</p>
        {items.length > 0 && !isOpened && <ChevronRight className="h-5 w-5" />}
        {items.length > 0 && isOpened && <ChevronDown className="h-5 w-5" />}
      </div>

      {items.length > 0 && isOpened && (
        <ul className="flex flex-col mt-2 gap-1">
          {items.map((item) => (
            <Link href={item.href} key={item.title}>
              <li className="text-base flex gap-4 items-center">
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt="Image"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                )}
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </NavbarMenuItem>
  );
};

export default DropdownMobile;
