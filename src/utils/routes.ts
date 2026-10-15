export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  keywords: string;
  label: string;
}

export const ROUTES = {
  HOME: "/",
  STORY: "/story",
  FEATURES: "/features",
  LEGACY: "/messis-legacy",
  TIMELINE: "/timeline",
  GALLERY: "/gallery",
  STORIES: "/stories",
  COMMUNITY: "/community",
  ABOUT: "/about",
  PRIVACY: "/privacy",
} as const;

export const ROUTE_METADATA: Record<string, RouteMeta> = {
  [ROUTES.HOME]: {
    path: "/",
    title: "Messi retirement: Is international football witnessing the end of an era?",
    description: "Explore messi retirement international football debates. From his past messi retirement from barcelona to 2026 World Cup questions, discover his epic legacy.",
    keywords: "Messi retirement, messi retirement international football, messi retirement from barcelona, 2026 World Cup, Argentina legacy",
    label: "Home"
  },
  [ROUTES.STORY]: {
    path: "/story",
    title: "Read the Story: Heartbreak, Redemption and Glory | The Final Whistle",
    description: "The complete 7-chapter long-form editorial feature examining Lionel Messi's international odyssey with Argentina.",
    keywords: "messi story, lionel messi argentina, heartbreak redemption glory",
    label: "Cover Story"
  },
  [ROUTES.FEATURES]: {
    path: "/features",
    title: "Football Features & Long-Form Stories | The Final Whistle",
    description: "In-depth editorial chapters, investigative analysis, and historical retrospectives on Argentine football.",
    keywords: "football features, messi analysis, argentine football",
    label: "Features"
  },
  [ROUTES.LEGACY]: {
    path: "/messis-legacy",
    title: "messi argentina: How did he achieve immortal World Cup and international glory?",
    description: "Discover how Lionel Messi conquered the Argentina world cup, cementing his immortal legacy with Copa América triumphs, iconic honors, and historic records.",
    keywords: "messi argentina, Argentina world cup, Copa América, immortal glory, honors, records",
    label: "Messi's legacy"
  },
  [ROUTES.TIMELINE]: {
    path: "/timeline",
    title: "messi story: How did his journey unfold from 2005 debut to Qatar glory?",
    description: "Explore the complete Messi life story and historic messi journey from his 2005 Albiceleste debut to Olympic gold, painful heartbreaks, and World Cup glory.",
    keywords: "messi story, Messi life story, messi journey, Albiceleste debut, Olympic gold, World Cup glory",
    label: "Timeline"
  },
  [ROUTES.GALLERY]: {
    path: "/gallery",
    title: "Moments That Defined a Legacy: Photo Gallery | The Final Whistle",
    description: "Documentary sports photography capturing iconic international moments of Lionel Messi and the Argentina national team.",
    keywords: "messi photos, sports photography, argentina gallery",
    label: "Gallery"
  },
  [ROUTES.STORIES]: {
    path: "/stories",
    title: "messi vs ronaldo: Who truly defined modern international football?",
    description: "Analyze legendary clashes and iconic messi goals across world football. Discover in-depth editorial stories, tactical breakdowns, and historic rivalries.",
    keywords: "messi vs ronaldo, messi goals, modern international football, tactical breakdowns, historic rivalries",
    label: "Latest stories"
  },
  [ROUTES.COMMUNITY]: {
    path: "/community",
    title: "Reader Reflections & Community | The Final Whistle",
    description: "Global readers share defining memories and personal reflections on Lionel Messi's international career.",
    keywords: "messi community, reader reflections, football discussion",
    label: "Community"
  },
  [ROUTES.ABOUT]: {
    path: "/about",
    title: "About The Publication & Masthead | The Final Whistle",
    description: "Editorial mission, journalistic standards, and verification guidelines behind The Final Whistle.",
    keywords: "about final whistle, football journalism, editorial standards",
    label: "About"
  },
  [ROUTES.PRIVACY]: {
    path: "/privacy",
    title: "Privacy Policy & Disclaimers | The Final Whistle",
    description: "Independent editorial disclosure, licensing attribution, and data privacy policies.",
    keywords: "privacy policy, disclaimers, photo licensing",
    label: "Privacy"
  }
};

/**
 * Normalizes a URL pathname:
 * - strips trailing slash (unless root)
 * - maps legacy aliases (e.g. /legacy -> /messis-legacy, /read-the-story -> /story)
 */
export function normalizePath(pathname: string): string {
  let cleaned = pathname.trim().toLowerCase();
  if (cleaned.length > 1 && cleaned.endsWith("/")) {
    cleaned = cleaned.slice(0, -1);
  }

  // Aliases for user friendliness
  if (cleaned === "/legacy") return ROUTES.LEGACY;
  if (cleaned === "/read-the-story" || cleaned === "/main-story") return ROUTES.STORY;
  if (cleaned === "/latest-stories" || cleaned === "/related-stories") return ROUTES.STORIES;
  if (cleaned === "/discussion") return ROUTES.COMMUNITY;

  return cleaned || "/";
}
