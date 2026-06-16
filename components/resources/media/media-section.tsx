"use client";

import {
  ArrowUpRight01Icon,
  Download01Icon,
  Download02Icon,
  DownloadCircle02Icon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterRectangleIcon as XLogo,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { pressReleases } from "./media-data";

const platformIcons: Record<string, any> = {
  LinkedIn: Linkedin01Icon,
  X: XLogo,
  Instagram: InstagramIcon,
};

export default function MediaSection() {
  const mediaItems = useMemo(
    () =>
      pressReleases.map((item) => {
        const serialNumber = Number(item["S. No"]);
        const category = serialNumber <= 14 ? "news" : "social";
        const platform = item.Publication.includes("Linkedin")
          ? "LinkedIn"
          : item.Publication.includes("Insta")
            ? "Instagram"
            : item.Publication.includes("(X)")
              ? "X"
              : item.Publication;

        return {
          id: serialNumber,
          title: item.Publication,
          publication: item.Publication,
          url: item.Links,
          category,
          platform,
          logo: item?.logo,
        };
      }),
    []
  );

  const newsItems = useMemo(
    () => mediaItems.filter((item) => item.category === "news"),
    [mediaItems]
  );
  const socialItems = useMemo(
    () => mediaItems.filter((item) => item.category === "social"),
    [mediaItems]
  );

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="md:text-5xl text-4xl font-semibold tracking-tight mb-6 text-neutral-800">
            Media Coverage
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12">
            Featured in leading publications and platforms. Discover what
            industry experts and media outlets are saying about Otto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="inline-flex h-14 items-center rounded-full bg-brand  px-8 text-base font-medium text-lime-900 hover:bg-lime-400 transition ">
              Press Inquires
            </button>

            <button
              type="button"
              className="inline-flex h-14 items-center rounded-full bg-white border border-neutral-200 px-8 text-base font-medium text-lime-900 hover:bg-neutral-50 transition ">

              <HugeiconsIcon icon={Download01Icon} className="size-5 mr-2" /> Download Company Profile
            </button>

            {/* <motion.a
              href="mailto:khusbu@ottosales.ai"
              className="px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold text-lg hover:opacity-90 transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Press Inquiries
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>

            <motion.a
              href="/press-kit.pdf"
              download
              className="px-8 py-3 rounded-full border-2 border-neutral-300 text-neutral-900 font-semibold text-lg hover:bg-neutral-50 transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Company Profile
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.a> */}
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              News Coverage
            </h2>
            <p className="text-neutral-600">
              Featured in {newsItems.length} leading publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => {
              const Icon = platformIcons[item.platform || ""] || ArrowUpRight01Icon;

              return (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-green-contrast/40 transition-all duration-300 hover:shadow-lg",
                    idx === 0 && "md:col-span-2"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {item.logo && (
                      <div className="relative w-full h-40 bg-neutral-50 overflow-hidden rounded-t-xl p-10 flex items-center justify-center border-b border-neutral-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.logo}
                          alt={item.title}
                          className={cn(
                            "object-contain h-32 grayscale transition-all duration-300",
                            (item.publication === "Ascendants" ||
                              item.publication === "Medial") &&
                            "invert opacity-60",
                            idx === 0 && "h-16"
                          )}
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {item.platform && (
                            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-neutral-100 mb-3">
                              <HugeiconsIcon
                                icon={Icon}
                                size={14}
                                className="text-neutral-600"
                              />
                              <span className="text-xs font-medium text-neutral-600">
                                {item.platform}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-neutral-300 group-hover:text-green-contrast transition-colors">
                          <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-green-contrast transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600 line-clamp-1 mb-4">
                        {item.publication}
                      </p>

                      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-green-contrast/15 text-green-contrast w-fit">
                        Publication
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              Social Media
            </h2>
            <p className="text-neutral-600">
              Featured across {socialItems.length} social media platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialItems.map((item, idx) => {
              const Icon = platformIcons[item.platform || ""] || ArrowUpRight01Icon;

              return (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-green-contrast/40 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx + newsItems.length) * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {item.platform && (
                            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-neutral-100 mb-3">
                              <HugeiconsIcon
                                icon={Icon}
                                size={14}
                                className="text-neutral-600"
                              />
                              <span className="text-xs font-medium text-neutral-600">
                                {item.platform}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-neutral-300 group-hover:text-green-contrast transition-colors">
                          <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-green-contrast transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600 line-clamp-1 mb-4">
                        {item.publication}
                      </p>

                      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-green-contrast/10 text-green-contrast w-fit">
                        Social Media
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
