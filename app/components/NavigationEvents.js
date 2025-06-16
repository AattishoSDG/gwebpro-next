"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "../providers/LoadingProvider";

export function NavigationEvents() {
  const pathname = usePathname();
  const { setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Scroll to top on every navigation
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [pathname, setIsLoading]);

  return null;
}
