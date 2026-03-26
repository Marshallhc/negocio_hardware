import { useState, useEffect } from "react";
import { MessageCircle, MapPin, Clock, CreditCard, Truck } from "lucide-react";
import { STORE_INFO, WHATSAPP_COMMUNITY } from "@/data/products";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto py-2 px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-heading font-bold text-base">HS</span>
          </div>
          <div className="leading-tight">
            <h1 className="font-heading font-bold text-base md:text-xl text-foreground">{STORE_INFO.name}</h1>
            <p className="text-[10px] md:text-xs text-muted-foreground">Hardware usado · Villa Crespo</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={WHATSAPP_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-whatsapp px-3 py-2 text-xs md:text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Unirse a la comunidad</span>
            <span className="sm:hidden">Comunidad</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const INFO_ITEMS = [
  { icon: MapPin, text: STORE_INFO.address },
  { icon: Clock, text: STORE_INFO.hours },
  { icon: CreditCard, text: `${STORE_INFO.paymentMethods.join(" · ")} — ${STORE_INFO.dollarType}` },
  { icon: Truck, text: STORE_INFO.shipping },
];

export const StoreInfoBar = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % INFO_ITEMS.length);
    }, 700);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop: show all items in a row
  if (!isMobile) {
    return (
      <section className="bg-card border-b border-border sticky top-[calc(var(--header-h,52px))] z-40">
        <div className="container mx-auto py-3 px-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
          {INFO_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <item.icon className="w-3.5 h-3.5" />{item.text}
            </span>
          ))}
        </div>
      </section>
    );
  }

  // Mobile: carousel
  const item = INFO_ITEMS[current];
  return (
    <section className="bg-card border-b border-border sticky top-[calc(var(--header-h,52px))] z-40">
      <div className="container mx-auto py-2 px-4 text-xs text-muted-foreground">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 truncate">
            <item.icon className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{item.text}</span>
          </span>
          <div className="flex gap-1 shrink-0">
            {INFO_ITEMS.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
