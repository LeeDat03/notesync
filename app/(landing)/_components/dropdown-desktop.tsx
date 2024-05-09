import { Button, NavbarMenuItem } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const DropdownDesktop = ({
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
  return (
    <NavbarMenuItem className="group relative cursor-pointer">
      <Button
        color="primary"
        size="sm"
        variant="light"
        className="text-sm flex items-center font-medium"
      >
        <span>{title}</span>
        {items.length > 0 && <ChevronDown className="h-4 w-4" />}
      </Button>

      {items.length > 0 && (
        <ul className="invisible p-1 absolute z-50 group-hover:visible bg-white border border-gray-200 w-[250px] rounded-lg shadow-md">
          {items.map((item) => {
            return (
              <Link href={item.href} key={item.title}>
                <li className="flex gap-2 items-center select-none space-y-1 rounded-md py-1 px-2 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10">
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt="Image"
                      width={25}
                      height={25}
                      loading="lazy"
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="text-base font-medium">{item.title}</span>

                    {item.description && (
                      <span className="text-xs text-gray-500">
                        {item.description}
                      </span>
                    )}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </NavbarMenuItem>
  );
};

export default DropdownDesktop;
