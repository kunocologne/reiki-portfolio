"use client";

import { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        id="scroll-progress"
        className="h-full bg-gradient-to-r from-[#E3A76F] to-[#8B70AC]"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};

export default ScrollProgress; 