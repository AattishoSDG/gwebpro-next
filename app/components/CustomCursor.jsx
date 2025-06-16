"use client";

import { useState, useEffect } from "react";

const CustomCursor = ({ isHovered, cursorText }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    // Mouse move event to update cursor position
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    // Check if the app is inside an iframe
    setIsInIframe(window.self !== window.top);

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Check if the app is inside an iframe
  // const isInIframe = window.self !== window.top;
  if (isInIframe) {
    // Hide the custom cursor if in iframe
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovered ? "active" : ""}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      {/* "/images/custom-cursor-text.svg" */}
      <img src={cursorText} alt="" />
    </div>
  );
};

export default function CustomCursorWrapper({ children, cursorText }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="d-flex"
    >
      <CustomCursor isHovered={isHovered} cursorText={cursorText} />
      {children}
    </div>
  );
}
