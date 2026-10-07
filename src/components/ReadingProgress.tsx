import React, { useEffect, useState } from "react";

export const ReadingProgress: React.FC = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#74ACDF] via-[#F5F5F5] to-[#C6A15B] transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
