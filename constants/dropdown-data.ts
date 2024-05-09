import { StaticImageData } from "next/image";
import images from "./images";

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
        imageSrc: images.ai,
      },
      {
        href: "#",
        title: "Docs",
        description: "Simple & powerful",
        imageSrc: images.docs,
      },
      {
        href: "#",
        title: "Wiki",
        description: "Centralized your knowledge",
        imageSrc: images.wiki,
      },
      {
        href: "#",
        title: "Projects",
        description: "Connected, flexible workflows",
        imageSrc: images.project,
      },
      {
        href: "#",
        title: "Calendar",
        description: "Time and work together",
        imageSrc: images.calendar,
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
        imageSrc: images.enterprise,
      },
      {
        href: "#",
        title: "Small Business",
        description: "Run your team in one tool",
        imageSrc: images.smallBusiness,
      },
      {
        href: "#",
        title: "Personal",
        description: "Free for individuals",
        imageSrc: images.personal,
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
