import React, { useState } from "react";
import { RouterProvider, useRouter, Link } from "./context/RouterContext";
import { ROUTES } from "./utils/routes";

import { Navbar } from "./components/Navbar";
import { ReadingProgress } from "./components/ReadingProgress";
import { HeroSection } from "./components/HeroSection";
import { ArticleHeader } from "./components/ArticleHeader";
import { TableOfContents } from "./components/TableOfContents";
import { ArticleContent } from "./components/ArticleContent";
import { TimelineSection } from "./components/TimelineSection";
import { AchievementSection } from "./components/AchievementSection";
import { PhotoGallery } from "./components/PhotoGallery";
import { LightboxModal } from "./components/LightboxModal";
import { RelatedStoriesSection } from "./components/RelatedStoriesSection";
import { ReaderDiscussion } from "./components/ReaderDiscussion";
import { NewsletterSection } from "./components/NewsletterSection";
import { SearchModal } from "./components/SearchModal";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { FeaturesView } from "./components/FeaturesView";
import { SingleStoryView } from "./components/SingleStoryView";
import { AboutView } from "./components/AboutView";
import { PrivacyView } from "./components/PrivacyView";

import { PHOTO_COLLECTION, PhotoAttribution } from "./data/photoAttributions";
import { ArrowRight, BookOpen, Trophy, ExternalLink, AlertCircle } from "lucide-react";

function AppContent() {
  const { currentPath } = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAttribution | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Lightbox Navigation
  const handlePhotoSelectById = (photoId: string) => {
    const found = PHOTO_COLLECTION.find((p) => p.id === photoId);
    if (found) setSelectedPhoto(found);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = PHOTO_COLLECTION.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % PHOTO_COLLECTION.length;
    setSelectedPhoto(PHOTO_COLLECTION[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = PHOTO_COLLECTION.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + PHOTO_COLLECTION.length) % PHOTO_COLLECTION.length;
    setSelectedPhoto(PHOTO_COLLECTION[prevIndex]);
  };

  // Section anchor jump within /story
  const handleSelectChapterSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans selection:bg-[#74ACDF]/30 selection:text-white relative flex flex-col justify-between">
      {/* Scroll reading progress bar at very top */}
      <ReadingProgress />

      {/* Sticky navigation bar with semantic URLs opening in new tab */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Router */}
      <main className="flex-1">
        {/* ROUTE: HOME (/) */}
        {currentPath === ROUTES.HOME && (
          <div>
            <HeroSection />

            {/* Editorial Feature Highlights Bar with target="_blank" */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#171719]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href={ROUTES.STORY}
                  target="_blank"
                  className="p-6 bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#74ACDF] block mb-2">
                      Cover Feature · 8 Min Read
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F5F5F5] group-hover:text-white mb-2 flex items-center justify-between">
                      <span>Read the Cover Story</span>
                      <ExternalLink className="w-4 h-4 text-[#A5A5AA] group-hover:text-[#74ACDF]" />
                    </h3>
                    <p className="text-xs text-[#A5A5AA] line-clamp-2">
                      Heartbreak, redemption, and glory: explore the complete 7-chapter investigation into Messi's international odyssey.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#74ACDF] group-hover:text-white inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-[#222227]">
                    <span>Enter Story (New Tab)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href={ROUTES.FEATURES}
                  target="_blank"
                  className="p-6 bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C6A15B] block mb-2">
                      Editorial Index · 7 Chapters
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F5F5F5] group-hover:text-white mb-2 flex items-center justify-between">
                      <span>Explore Features Hub</span>
                      <ExternalLink className="w-4 h-4 text-[#A5A5AA] group-hover:text-[#C6A15B]" />
                    </h3>
                    <p className="text-xs text-[#A5A5AA] line-clamp-2">
                      Browse all 7 individual chapters, tactical retrospectives, and companion investigative features.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#C6A15B] group-hover:text-white inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-[#222227]">
                    <span>Browse Features (New Tab)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href={ROUTES.LEGACY}
                  target="_blank"
                  className="p-6 bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#74ACDF] block mb-2">
                      Honors & Archives
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F5F5F5] group-hover:text-white mb-2 flex items-center justify-between">
                      <span>Messi's legacy</span>
                      <ExternalLink className="w-4 h-4 text-[#A5A5AA] group-hover:text-[#74ACDF]" />
                    </h3>
                    <p className="text-xs text-[#A5A5AA] line-clamp-2">
                      World Cup, Copa América, Golden Balls, and verified historical statistics with Argentina.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#74ACDF] group-hover:text-white inline-flex items-center gap-1.5 mt-4 pt-3 border-t border-[#222227]">
                    <span>Messi's legacy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </section>

            {/* Career Timeline Section */}
            <TimelineSection onOpenPhotoLightbox={handlePhotoSelectById} />

            {/* Achievements Section */}
            <AchievementSection />

            {/* Documentary Photo Gallery */}
            <PhotoGallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

            {/* Related Stories */}
            <RelatedStoriesSection />

            {/* Reader Discussion */}
            <ReaderDiscussion />

            {/* Newsletter Dispatch */}
            <NewsletterSection />
          </div>
        )}

        {/* ROUTE: READ THE STORY (/story) */}
        {currentPath === ROUTES.STORY && (
          <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Breadcrumbs items={[{ label: "Read the Story" }]} />

            {/* Article Header & Metadata */}
            <ArticleHeader />

            {/* Editorial Grid: Sidebar Table of Contents + Reading Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sticky Table of Contents Sidebar */}
              <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
                <TableOfContents onSelectSection={handleSelectChapterSection} />
              </aside>

              {/* Main Long-Form Article Body (700-800px optimal reading column) */}
              <div className="lg:col-span-8 max-w-3xl">
                {/* Mobile Table of Contents */}
                <div className="lg:hidden mb-10">
                  <TableOfContents onSelectSection={handleSelectChapterSection} />
                </div>

                {/* Long-form 7 chapters */}
                <ArticleContent onOpenPhotoLightbox={handlePhotoSelectById} />

                {/* Next Steps Links opening in new tab */}
                <div className="mt-16 pt-8 border-t border-[#222227] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href={ROUTES.FEATURES}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#74ACDF] hover:underline"
                  >
                    <span>Browse Features Index</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={ROUTES.LEGACY}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171719] hover:bg-[#222227] border border-[#222227] hover:border-[#74ACDF]/50 text-xs font-semibold text-[#F5F5F5] rounded transition-all"
                  >
                    <span>Messi's legacy</span>
                    <ExternalLink className="w-4 h-4 text-[#C6A15B]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ROUTE: FEATURES TAB (/features) */}
        {currentPath === ROUTES.FEATURES && <FeaturesView />}

        {/* ROUTE: MESSI'S LEGACY (/messis-legacy) */}
        {currentPath === ROUTES.LEGACY && (
          <div className="pt-28 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <Breadcrumbs items={[{ label: "Messi's legacy" }]} />
            </div>
            <AchievementSection />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-between items-center text-xs">
              <Link href={ROUTES.STORY} target="_blank" className="text-[#74ACDF] hover:underline inline-flex items-center gap-1">
                <span>Read Cover Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link href={ROUTES.TIMELINE} target="_blank" className="text-[#74ACDF] hover:underline inline-flex items-center gap-1">
                <span>Timeline</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ROUTE: TIMELINE (/timeline) */}
        {currentPath === ROUTES.TIMELINE && (
          <div className="pt-28 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <Breadcrumbs items={[{ label: "Timeline" }]} />
            </div>
            <TimelineSection onOpenPhotoLightbox={handlePhotoSelectById} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-between items-center text-xs">
              <Link href={ROUTES.HOME} target="_blank" className="text-[#74ACDF] hover:underline inline-flex items-center gap-1">
                <span>Back to Homepage</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link href={ROUTES.LEGACY} target="_blank" className="text-[#74ACDF] hover:underline inline-flex items-center gap-1">
                <span>Messi's legacy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ROUTE: PHOTO GALLERY (/gallery) */}
        {currentPath === ROUTES.GALLERY && (
          <div className="pt-28 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <Breadcrumbs items={[{ label: "Photo Gallery" }]} />
            </div>
            <PhotoGallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />
          </div>
        )}

        {/* ROUTE: LATEST STORIES (/stories) */}
        {currentPath === ROUTES.STORIES && (
          <div className="pt-28 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <Breadcrumbs items={[{ label: "Latest stories" }]} />
            </div>
            <RelatedStoriesSection />
          </div>
        )}

        {/* ROUTE: INDIVIDUAL STORY (/stories/:id) */}
        {currentPath.startsWith("/stories/") && (
          <SingleStoryView storyId={currentPath.replace("/stories/", "")} />
        )}

        {/* ROUTE: COMMUNITY (/community) */}
        {currentPath === ROUTES.COMMUNITY && (
          <div className="pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <Breadcrumbs items={[{ label: "Reader Reflections" }]} />
            </div>
            <ReaderDiscussion />
          </div>
        )}

        {/* ROUTE: ABOUT (/about) */}
        {currentPath === ROUTES.ABOUT && <AboutView />}

        {/* ROUTE: PRIVACY (/privacy) */}
        {currentPath === ROUTES.PRIVACY && <PrivacyView />}

        {/* ROUTE 404 FALLBACK */}
        {![
          ROUTES.HOME,
          ROUTES.STORY,
          ROUTES.FEATURES,
          ROUTES.LEGACY,
          ROUTES.TIMELINE,
          ROUTES.GALLERY,
          ROUTES.STORIES,
          ROUTES.COMMUNITY,
          ROUTES.ABOUT,
          ROUTES.PRIVACY,
        ].includes(currentPath as any) &&
          !currentPath.startsWith("/stories/") && (
            <div className="pt-36 pb-24 px-4 max-w-xl mx-auto text-center">
              <AlertCircle className="w-12 h-12 text-[#C6A15B] mx-auto mb-4" />
              <h1 className="font-serif text-3xl font-bold text-[#F5F5F5] mb-2">
                Page Not Found
              </h1>
              <p className="text-sm text-[#A5A5AA] mb-8">
                The requested URL <code className="text-[#74ACDF]">{currentPath}</code> does not correspond to an editorial section.
              </p>
              <Link
                href={ROUTES.HOME}
                className="px-6 py-3 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs tracking-wider uppercase rounded-md transition-colors"
              >
                Return to The Final Whistle Homepage
              </Link>
            </div>
          )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
