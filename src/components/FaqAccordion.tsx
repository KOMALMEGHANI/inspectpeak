import { Reveal } from "@/components/Reveal";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Reveal className="mx-auto max-w-3xl">
      <div className="space-y-8 sm:space-y-10">
        {items.map((item) => (
          <div key={item.q} className="group">
            <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              {item.q}
            </h3>
            <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
