"use client";
const ScrollButton = ({ sectionId }) => {
  const handleClick = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button onClick={handleClick} className="scroll">
      {/* {children || `Scroll to ${sectionId}`} */}
    </button>
  );
};

export default ScrollButton;
