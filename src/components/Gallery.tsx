import { useMemo, useState } from "react";
import { Maximize2, MoveHorizontal, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src: string;
  afterSrc?: string;
  title: string;
  alt: string;
  afterAlt?: string;
  category: string;
  beforeNote?: string;
  afterNote?: string;
};

const filters = [
  "All",
  "Before & After",
  "Cracks",
  "Moisture",
  "Finishing",
  "Electrical",
  "Drawings",
  "On Site",
] as const;

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  position: number;
  onChange: (value: number) => void;
  className?: string;
  aspectClass?: string;
};

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  position,
  onChange,
  className,
  aspectClass = "aspect-[3/2]",
}: BeforeAfterSliderProps) {
  return (
    <div
      className={cn(
        "relative w-full select-none overflow-hidden bg-navy-deep",
        aspectClass,
        className,
      )}
    >
      {/* After image (full base layer) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Before image (clipped left side) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Corner Before / After badges */}
      <span
        className={cn(
          "pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-amber px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-opacity",
          position < 14 ? "opacity-0" : "opacity-100",
        )}
      >
        Before
      </span>
      <span
        className={cn(
          "pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-emerald-700 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-opacity",
          position > 86 ? "opacity-0" : "opacity-100",
        )}
      >
        After
      </span>

      {/* Divider line & circular handle */}
      <div
        aria-hidden="true"
        style={{ left: `${position}%` }}
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.65)]"
      >
        <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-navy text-white shadow-md">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      {/* Accessible interactive range overlay (supports mouse drag, touch & keyboard) */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`Compare before and after for ${beforeAlt}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

function BeforeAfterCard({
  item,
  onOpenLightbox,
}: {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem) => void;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_oklch(0.25_0.055_265/0.25)]">
      <div className="relative">
        <BeforeAfterSlider
          beforeSrc={item.src}
          afterSrc={item.afterSrc!}
          beforeAlt={item.alt}
          afterAlt={item.afterAlt ?? `${item.title} after rectification`}
          position={pos}
          onChange={setPos}
        />
        <button
          type="button"
          onClick={() => onOpenLightbox(item)}
          aria-label={`Expand before and after comparison for ${item.title}`}
          className="absolute bottom-2.5 right-2.5 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-navy-deep/80 text-white backdrop-blur-sm transition-colors hover:bg-amber"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber">
              {item.category} · Before / After
            </span>
            <div className="flex items-center gap-1">
              {(
                [
                  { label: "Before", val: 100 },
                  { label: "Split", val: 50 },
                  { label: "After", val: 0 },
                ] as const
              ).map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setPos(preset.val)}
                  className={cn(
                    "rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider transition-colors",
                    Math.abs(pos - preset.val) < 10
                      ? "bg-navy text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          <h3 className="mt-1.5 text-sm font-bold text-foreground">{item.title}</h3>
          {(item.beforeNote || item.afterNote) && (
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {pos >= 50 ? item.beforeNote : item.afterNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [lightboxPos, setLightboxPos] = useState(50);

  const visible = useMemo(() => {
    if (active === "All") return items;
    if (active === "Before & After") return items.filter((i) => Boolean(i.afterSrc));
    return items.filter((i) => i.category === active);
  }, [active, items]);

  const openLightbox = (item: GalleryItem) => {
    setLightboxPos(50);
    setLightbox(item);
  };

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

      <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Drag the slider or tap Before / After on defect cards to compare before inspection &amp;
        after repair
      </p>

      <Reveal className="reveal-stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" key={active}>
        {visible.map((item) =>
          item.afterSrc ? (
            <BeforeAfterCard key={item.title} item={item} onOpenLightbox={openLightbox} />
          ) : (
            <button
              key={item.title}
              type="button"
              onClick={() => openLightbox(item)}
              className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_oklch(0.25_0.055_265/0.25)]"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber">
                  {item.category}
                </span>
                <span className="mt-1 block text-sm font-bold text-foreground">{item.title}</span>
              </div>
            </button>
          ),
        )}
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
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.afterSrc ? (
              <BeforeAfterSlider
                beforeSrc={lightbox.src}
                afterSrc={lightbox.afterSrc}
                beforeAlt={lightbox.alt}
                afterAlt={lightbox.afterAlt ?? `${lightbox.title} after rectification`}
                position={lightboxPos}
                onChange={setLightboxPos}
                aspectClass="aspect-[16/10] max-h-[70vh]"
              />
            ) : (
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="animate-lightbox-in max-h-[75vh] w-full bg-navy-deep object-contain"
              />
            )}

            <div className="space-y-2 bg-card px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base font-bold text-foreground">{lightbox.title}</p>
                <div className="flex items-center gap-2">
                  {lightbox.afterSrc && (
                    <div className="flex items-center gap-1">
                      {(
                        [
                          { label: "Before", val: 100 },
                          { label: "50 / 50", val: 50 },
                          { label: "After", val: 0 },
                        ] as const
                      ).map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setLightboxPos(preset.val)}
                          className={cn(
                            "rounded px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-colors",
                            Math.abs(lightboxPos - preset.val) < 10
                              ? "bg-navy text-white"
                              : "bg-muted text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {lightbox.category}
                  </span>
                </div>
              </div>
              {lightbox.afterSrc && (lightbox.beforeNote || lightbox.afterNote) && (
                <div className="grid gap-2 pt-1 text-xs sm:grid-cols-2">
                  <p className="rounded-md bg-destructive/10 px-3 py-2 text-destructive">
                    {lightbox.beforeNote}
                  </p>
                  <p className="rounded-md bg-emerald-50 px-3 py-2 text-emerald-800">
                    {lightbox.afterNote}
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/80 text-white transition-colors hover:bg-navy-deep"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
