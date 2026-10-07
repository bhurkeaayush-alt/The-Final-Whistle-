import React from "react";
import { PHOTO_COLLECTION, PhotoAttribution } from "../data/photoAttributions";
import { Maximize2, ShieldCheck } from "lucide-react";

interface PhotoGalleryProps {
  onSelectPhoto: (photo: PhotoAttribution) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onSelectPhoto }) => {
  return (
    <section id="gallery" className="py-24 bg-[#0B0B0D] border-t border-[#171719] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-3">
            <span>Visual Archive</span>
            <span className="text-[#A5A5AA]">·</span>
            <span>Documentary Photography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Moments That Defined a Legacy
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
            Authentic, verified documentary photographs capturing Lionel Messi’s international career—from Beijing Olympic gold to Qatar World Cup glory.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTO_COLLECTION.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-xl overflow-hidden border border-[#222227] hover:border-[#74ACDF]/50 bg-[#171719] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#74ACDF]/5 flex flex-col"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <button
                onClick={() => onSelectPhoto(photo)}
                className="w-full text-left relative aspect-[4/3] overflow-hidden bg-black/50 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
                aria-label={`Open photo in lightbox: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Hover Overlay & Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-xs text-[#F5F5F5]">
                    <span className="font-serif font-medium truncate mr-2">
                      {photo.title}
                    </span>
                    <Maximize2 className="w-4 h-4 text-[#74ACDF] flex-shrink-0" />
                  </div>
                </div>

                {/* Year Pill Top Left */}
                <div className="absolute top-3 left-3 bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#222227] text-[10px] font-mono text-[#C6A15B] px-2 py-0.5 rounded">
                  {photo.year}
                </div>
              </button>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#F5F5F5] mb-1 line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#A5A5AA] line-clamp-2 leading-relaxed mb-3">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#222227] flex items-center justify-between text-[10px] text-[#A5A5AA]/70">
                  <span className="truncate max-w-[140px]">{photo.credit}</span>
                  <span className="font-mono text-[#74ACDF] flex-shrink-0">{photo.license}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Note */}
        <div className="mt-12 text-center text-xs text-[#A5A5AA]/70 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#74ACDF]" />
          <span>
            All imagery sourced from verified Wikimedia Commons public licenses (CC BY / CC BY-SA). No synthetic or generated substitutes.
          </span>
        </div>
      </div>
    </section>
  );
};
