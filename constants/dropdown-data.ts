import { StaticImageData } from "next/image";
import icons from "./icons";

interface DropdownInterface {
  title: string;
  items: {
    href: string;
    title: string;
    description?: string;
    imageSrc?: StaticImageData;
  }[];
}

const dropdownData: DropdownInterface[] = [
  {
    title: "Product",
    items: [
      {
        href: "#",
        title: "AI",
        description: "Intergrated AI assistant",
        imageSrc: icons.ai,
      },
      {
        href: "#",
        title: "Docs",
        description: "Simple & powerful",
        imageSrc: icons.docs,
      },
      {
        href: "#",
        title: "Wiki",
        description: "Centralized your knowledge",
        imageSrc: icons.wiki,
      },
      {
        href: "#",
        title: "Projects",
        description: "Connected, flexible workflows",
        imageSrc: icons.project,
      },
      {
        href: "#",
        title: "Calendar",
        description: "Time and work together",
        imageSrc: icons.calendar,
      },
    ],
  },
  {
    title: "Download",
    items: [
      {
        href: "#",
        title: "Notion",
      },
      {
        href: "#",
        title: "Calendar",
      },
      {
        href: "#",
        title: "Web Clipper",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        href: "#",
        title: "Enterprise",
        description: "Advanced features for your business",
        imageSrc: icons.enterprise,
      },
      {
        href: "#",
        title: "Small Business",
        description: "Run your team in one tool",
        imageSrc: icons.smallBusiness,
      },
      {
        href: "#",
        title: "Personal",
        description: "Free for individuals",
        imageSrc: icons.personal,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { href: "#", title: "Blog" },
      { href: "#", title: "Notion Academy" },
      { href: "#", title: "Guide & Tutoriala" },
      { href: "#", title: "Webinars" },
      { href: "#", title: "Help center" },
      { href: "#", title: "API docs" },
      { href: "#", title: "Community" },
    ],
  },
  {
    title: "Pricing",
    items: [],
  },
];

export default dropdownData;
