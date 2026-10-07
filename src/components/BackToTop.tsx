import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#171719]/90 text-[#F5F5F5] hover:text-[#74ACDF] border border-[#222227] hover:border-[#74ACDF] shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
