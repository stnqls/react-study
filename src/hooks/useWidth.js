import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(this.width);
  console.log(this.width);
  function resize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return width;
}
