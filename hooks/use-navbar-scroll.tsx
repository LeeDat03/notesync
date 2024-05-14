import { useEffect, useState } from "react";

export const useNavbarScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY > 0);
    };
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
