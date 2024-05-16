"use client";

import clsx from "clsx";
import { ChevronLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // RESIZE NAV
  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    isResizingRef.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sizebarRef.current && navbarRef.current) {
      sizebarRef.current.style.width = `${newWidth}px`;

      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
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
            "h-6 w-6 z-50 text-gray-500 rounded-md hover:bg-neutral-300 absolute top-3 right-2 cursor-pointer opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
          onClick={collapse}
        >
          <ChevronLeft className="h-6 w-6" />
        </div>

        {/* USER SECTION */}
        <div>
          <UserItem />
        </div>

        {/* RESIZE DIV */}
        <div
          className="opacity-0 group-hover/sidebar:opacity-100 transition w-1 h-full absolute top-0 right-0 bg-gray-300 cursor-ew-resize"
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
        />
      </aside>

      {/* NAVBAR */}
      <div
        ref={navbarRef}
        className={clsx(
          "absolute top-0 z-50 left-60 w-[calc(100%-240px)] h-10 ",
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
