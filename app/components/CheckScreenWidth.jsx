// CHECK IF WIDTH IS GREATER THAN setWidth
"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function CheckScreenWidth({ setWidth = 575, children }) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize); // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{windowWidth > setWidth ? <>{children}</> : null}</>;
}
// Define PropTypes
CheckScreenWidth.propTypes = {
  setWidth: PropTypes.number, // Ensures setWidth is a required number
  children: PropTypes.node, // Ensures children can be any valid React node
};

// Default Props (optional, if needed)
// CheckScreenWidth.defaultProps = {
//   children: null, // Default to null if children are not provided
// };
