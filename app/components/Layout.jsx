"use client";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useLayoutEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const setScrollbarHeight = () => {
      const scrollbarHeight =
        window.innerHeight - document.documentElement.clientHeight;
      document.documentElement.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );
      // console.log(location, scrollbarHeight);
    };
    setScrollbarHeight(); // Recalculate on route change

    // Optional: Recalculate on resize if needed
    window.addEventListener("resize", setScrollbarHeight);

    return () => {
      window.removeEventListener("resize", setScrollbarHeight);
    };
  }, [location]); // Re-run when the route changes
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
