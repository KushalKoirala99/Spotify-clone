import { useState, useRef } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let newPosition =
      direction === "left" ? scrollPosition - 200 : scrollPosition + 200;

    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxScroll) newPosition = maxScroll;

    setScrollPosition(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return { containerRef, scroll };
};
