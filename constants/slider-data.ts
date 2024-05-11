import icons from "./icons";
import images from "./images";
import { StaticImageData } from "next/image";

interface SliderInterface {
  title: string;
  icon: StaticImageData;
  pageImage: StaticImageData;
}

const sliderData: SliderInterface[] = [
  {
    title: "Engineering",
    icon: icons.engineering,
    pageImage: images.EngineeringPage,
  },
  {
    title: "Design",
    icon: icons.design,
    pageImage: images.DesignPage,
  },
  {
    title: "Product",
    icon: icons.product,
    pageImage: images.ProductPage,
  },
  {
    title: "Marketing",
    icon: icons.marketing,
    pageImage: images.MarketingPage,
  },
  {
    title: "Operations",
    icon: icons.operations,
    pageImage: images.OperationPage,
  },
  {
    title: "HR",
    icon: icons.hr,
    pageImage: images.HRPage,
  },
];

export default sliderData;
