"use client";

import clsx from "clsx";
import { ChevronLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sizebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isReseting, setIsReseting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  const resetWidth = () => {
    if (sizebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsReseting(true);

      sizebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0px" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsReseting(false), 300);
    }
  };

  const collapse = () => {
    if (sizebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsReseting(true);

      sizebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("left", "0");
      navbarRef.current.style.setProperty("width", "100%");

      setTimeout(() => setIsReseting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sizebarRef}
        className={clsx(
          "group/sidebar min-h-full w-60 bg-nav overflow-y-auto relative z-50",
          isReseting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={clsx(
            "h-6 w-6 text-gray-500 rounded-md hover:bg-neutral-300 absolute top-3 right-2 cursor-pointer opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
          onClick={collapse}
        >
          <ChevronLeft className="h-6 w-6" />
        </div>

        <div className="opacity-0 group-hover/sidebar:opacity-100 transition w-1 h-full absolute top-0 right-0 bg-gray-300 cursor-ew-resize" />
      </aside>

      <div
        ref={navbarRef}
        className={clsx(
          "absolute top-0 z-50 left-60 w-[calc(100%-240px)] ",
          isReseting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav
          className={clsx("bg-transparent w-full", isCollapsed && "px-3 py-2")}
        >
          {isCollapsed && (
            <MenuIcon
              role="button"
              className="h-6 w-6 text-gray-500"
              onClick={resetWidth}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
