import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { normalizePath, ROUTE_METADATA, ROUTES } from "../utils/routes";

interface RouterContextType {
  currentPath: string;
  activeHash: string;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  isCurrentRoute: (path: string) => boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return normalizePath(window.location.pathname);
    }
    return ROUTES.HOME;
  });

  const [activeHash, setActiveHash] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.hash;
    }
    return "";
  });

  // Updates Document Title & Canonical Link
  const updateSEO = useCallback((path: string) => {
    if (typeof document === "undefined") return;

    // Check exact route or stories prefix
    let meta = ROUTE_METADATA[path];
    if (!meta && path.startsWith("/stories/")) {
      const slug = path.replace("/stories/", "");
      meta = {
        path,
        title: `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} | The Final Whistle`,
        description: "In-depth editorial story analysis from The Final Whistle.",
        keywords: "messi stories, football editorial, the final whistle",
        label: "Story"
      };
    }

    if (meta) {
      document.title = meta.title;

      const setMetaAttr = (selector: string, attr: string, val: string, tagName = "meta", createAttrs?: Record<string, string>) => {
        let el = document.querySelector(selector);
        if (!el && createAttrs) {
          el = document.createElement(tagName);
          Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
          document.head.appendChild(el);
        }
        if (el) {
          el.setAttribute(attr, val);
        }
      };

      setMetaAttr('meta[name="description"]', "content", meta.description, "meta", { name: "description" });
      if (meta.keywords) {
        setMetaAttr('meta[name="keywords"]', "content", meta.keywords, "meta", { name: "keywords" });
      }
      setMetaAttr('meta[property="og:title"]', "content", meta.title, "meta", { property: "og:title" });
      setMetaAttr('meta[property="og:description"]', "content", meta.description, "meta", { property: "og:description" });
      setMetaAttr('meta[name="twitter:title"]', "content", meta.title, "meta", { name: "twitter:title" });
      setMetaAttr('meta[name="twitter:description"]', "content", meta.description, "meta", { name: "twitter:description" });

      const fullUrl = `${window.location.origin}${meta.path}`;
      setMetaAttr('meta[property="og:url"]', "content", fullUrl, "meta", { property: "og:url" });
      setMetaAttr('link[rel="canonical"]', "href", fullUrl, "link", { rel: "canonical" });
    }
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean; scroll?: boolean }) => {
    if (typeof window === "undefined") return;

    // Parse target path and hash
    const [pathPart, hashPart] = to.split("#");
    const normalized = normalizePath(pathPart || "/");
    const newHash = hashPart ? `#${hashPart}` : "";
    const fullTarget = `${normalized}${newHash}`;

    if (options?.replace) {
      window.history.replaceState({ path: normalized, hash: newHash }, "", fullTarget);
    } else {
      window.history.pushState({ path: normalized, hash: newHash }, "", fullTarget);
    }

    setCurrentPath(normalized);
    setActiveHash(newHash);
    updateSEO(normalized);

    // Scroll handling
    if (newHash) {
      setTimeout(() => {
        const el = document.getElementById(newHash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [updateSEO]);

  // Listen to browser popstate (back / forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const normalized = normalizePath(window.location.pathname);
      setCurrentPath(normalized);
      setActiveHash(window.location.hash);
      updateSEO(normalized);

      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    updateSEO(currentPath);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [currentPath, updateSEO]);

  const isCurrentRoute = useCallback((path: string) => {
    return currentPath === normalizePath(path);
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, activeHash, navigate, isCurrentRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  className?: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  replace = false,
  scroll = true,
  className = "",
  children,
  onClick,
  target,
  rel,
  openInNewTab = false,
  ...props
}) => {
  const { navigate } = useRouter();

  const isBlank = target === "_blank" || openInNewTab;
  const effectiveTarget = isBlank ? "_blank" : target;
  const effectiveRel = isBlank ? "noopener noreferrer" : rel;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If opening in a new tab, allow native browser navigation without e.preventDefault()
    if (isBlank) {
      if (onClick) onClick(e);
      return;
    }

    // Let browser handle special key combinations (e.g. Cmd+Click / Ctrl+Click to open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // If external link, let browser navigate normally
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href, { replace, scroll });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={effectiveTarget}
      rel={effectiveRel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
