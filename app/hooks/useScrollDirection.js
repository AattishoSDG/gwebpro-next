// "use client";
// // // useScrollDirection.js (Custom Hook)
// import { useState, useEffect } from "react";

// const useScrollDirection = (threshold = 100, isPaused = false) => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (isPaused) return;
//       if (currentScrollY > threshold) {
//         setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, threshold, isPaused]);

//   return scrollDirection;
// };
// export default useScrollDirection;
"use client"; // Ensures this only runs on the client side
import { useState, useEffect } from "react";

const useScrollDirection = (threshold = 100, isPaused = false) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0); // Initialize with 0 instead of window.scrollY

  useEffect(() => {
    // Now safe to use `window` because this runs only on the client
    setLastScrollY(window.scrollY); // Update with actual scroll position after mount

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isPaused) return;

      if (currentScrollY > threshold) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold, isPaused]);

  return scrollDirection;
};

export default useScrollDirection;
