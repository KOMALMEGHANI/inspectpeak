import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { isWhatsAppConfigured, whatsappLink } from "@/lib/site-config";

/**
 * Floating "Chat on WhatsApp" button. The number is configured in
 * src/lib/site-config.ts — while it is still a placeholder, clicking shows a
 * notice instead of opening an invalid chat.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const configured = isWhatsAppConfigured();

  return (
    <a
      href={configured ? whatsappLink() : undefined}
      target={configured ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={(e) => {
        if (configured) return;
        e.preventDefault();
        toast.info(
          "WhatsApp chat is coming soon — for now, please use the enquiry form on our Contact page.",
        );
      }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[oklch(0.62_0.17_152)] py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_oklch(0.62_0.17_152/0.5)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.62_0.17_152)]"
    >
      <MessageCircle className="h-5 w-5 fill-white/20" />
      Chat on WhatsApp
    </a>
  );
}
