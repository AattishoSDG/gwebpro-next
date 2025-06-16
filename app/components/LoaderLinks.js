"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // Import usePathname
import { useLoader } from "./LoaderContext";

export default function LoaderLinks({ href, children }) {
  const { show, hide } = useLoader();
  // const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const isActive = pathname === href; // Check if the current path matches the link's href

  const handleClick = (e) => {
    show();
    setTimeout(() => {
      hide();
    }, 1000);
    // Let Next.js handle navigation
  };

  return (
    // prefetch={false}
    <Link
      href={href}
      onClick={handleClick}
      className={isActive ? "active-page" : ""} // Conditionally add the class
    >
      {children}
    </Link>
  );
}
