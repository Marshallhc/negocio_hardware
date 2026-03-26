import { MessageCircle, MapPin, Clock, CreditCard, Truck } from "lucide-react";
import { STORE_INFO, WHATSAPP_COMMUNITY } from "@/data/products";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">HS</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-foreground">{STORE_INFO.name}</h1>
            <p className="text-xs text-muted-foreground">Hardware usado · Villa Crespo</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={WHATSAPP_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp px-4 py-2.5 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4" />
            Unirse a la comunidad
          </a>
        </div>
      </div>
    </header>
  );
};

export const StoreInfoBar = () => (
  <section className="bg-card border-b border-border sticky top-[72px] z-40">
    <div className="container mx-auto py-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{STORE_INFO.address}</span>
      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{STORE_INFO.hours}</span>
      <span className="inline-flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" />{STORE_INFO.paymentMethods.join(" · ")} — {STORE_INFO.dollarType}</span>
      <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" />{STORE_INFO.shipping}</span>
    </div>
  </section>
);

export default Header;
