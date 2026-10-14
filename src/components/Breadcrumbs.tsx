import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#A5A5AA]">
        <li>
          <Link
            href={ROUTES.HOME}
            className="hover:text-[#74ACDF] transition-colors flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-[#A5A5AA]/40" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#74ACDF] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#74ACDF] font-semibold">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
