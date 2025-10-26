import { useEffect, useState } from "react";

/**
 * useIsMobile - A simple hook to detect if the viewport width is below a given breakpoint.
 *
 * @param breakpoint - width in pixels to define "mobile" (default: 768)
 * @returns boolean - true if viewport is less than the breakpoint width
 *
 * Usage:
 *   const isMobile = useIsMobile(); // true or false
 *   if (isMobile) { ... }
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof globalThis !== "undefined"
      ? globalThis.innerWidth < breakpoint
      : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
