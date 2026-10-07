import React, { useState } from "react";
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
import { StoryModal } from "./components/StoryModal";
import { ReaderDiscussion } from "./components/ReaderDiscussion";
import { NewsletterSection } from "./components/NewsletterSection";
import { SearchModal } from "./components/SearchModal";
import { AboutModal } from "./components/AboutModal";
import { PrivacyModal } from "./components/PrivacyModal";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

import { PHOTO_COLLECTION, PhotoAttribution } from "./data/photoAttributions";
import { RELATED_STORIES, RelatedStory } from "./data/articleData";

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAttribution | null>(null);
  const [selectedStory, setSelectedStory] = useState<RelatedStory | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Search Jump Handler
  const handleSearchResultSelect = (
    type: "section" | "timeline" | "achievements" | "related",
    targetId?: string
  ) => {
    if (type === "section" && targetId) {
      scrollToSection(targetId);
    } else if (type === "timeline") {
      scrollToSection("timeline");
    } else if (type === "achievements") {
      scrollToSection("achievements");
    } else if (type === "related" && targetId) {
      const foundStory = RELATED_STORIES.find((s) => s.id === targetId);
      if (foundStory) {
        setSelectedStory(foundStory);
      } else {
        scrollToSection("related");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] font-sans selection:bg-[#74ACDF]/30 selection:text-white relative">
      {/* Scroll reading progress bar at very top */}
      <ReadingProgress />

      {/* Sticky navigation bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Hero section */}
      <main>
        <HeroSection
          onReadStory={() => scrollToSection("article-start")}
          onExploreLegacy={() => scrollToSection("achievements")}
        />

        {/* Anchor mark for story beginning */}
        <div id="article-start" className="scroll-mt-24" />

        {/* Main Article Section */}
        <section id="article" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Article Header & Metadata */}
          <ArticleHeader />

          {/* Editorial Grid: Sidebar Table of Contents + Reading Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <TableOfContents onSelectSection={scrollToSection} />
            </aside>

            {/* Main Long-Form Article Body (700-800px optimal reading column) */}
            <div className="lg:col-span-8 max-w-3xl">
              {/* Mobile Table of Contents Accordion */}
              <div className="lg:hidden mb-10">
                <TableOfContents onSelectSection={scrollToSection} />
              </div>

              {/* Long-form 7 chapters */}
              <ArticleContent onOpenPhotoLightbox={handlePhotoSelectById} />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSection onOpenPhotoLightbox={handlePhotoSelectById} />

        {/* Achievements & Statistics Section */}
        <AchievementSection />

        {/* Photo Gallery Section */}
        <PhotoGallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Related Stories Section */}
        <RelatedStoriesSection onSelectStory={(story) => setSelectedStory(story)} />

        {/* Reader Discussion Section */}
        <ReaderDiscussion />

        {/* Newsletter Subscription Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onNavigateSection={scrollToSection}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />

      {/* Story Reader Modal */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />

      {/* About Masthead Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Privacy Policy & Disclaimer Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
