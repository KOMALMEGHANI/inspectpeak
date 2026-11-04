import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src: string;
  title: string;
  alt: string;
  category: string;
};

const filters = [
  "All",
  "Cracks",
  "Moisture",
  "Finishing",
  "Drawings",
  "On Site",
  "Residences",
] as const;

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items],
  );

  return (
    <div>
      <Reveal className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              active === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <Reveal
        className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        key={active}
      >
        {visible.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setLightbox(item)}
            className="group relative overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_oklch(0.25_0.055_265/0.25)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/50 to-transparent p-4 pt-10">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber">
                {item.category}
              </span>
              <span className="mt-0.5 block text-sm font-semibold text-white">
                {item.title}
              </span>
            </span>
          </button>
        ))}
      </Reveal>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="animate-lightbox-in max-h-[80vh] w-full object-contain"
            />
            <div className="flex items-center justify-between bg-card px-4 py-3">
              <p className="text-sm font-semibold text-foreground">
                {lightbox.title}
              </p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {lightbox.category}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/70 text-white transition-colors hover:bg-navy-deep"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
