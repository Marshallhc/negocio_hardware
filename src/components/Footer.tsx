import { MessageCircle, AlertCircle, MapPin } from "lucide-react";
import { STORE_INFO, WHATSAPP_COMMUNITY } from "@/data/products";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-8">
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <h3 className="font-heading font-semibold text-sm text-foreground">Ubicación</h3>
        <p className="text-xs text-muted-foreground flex items-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          {STORE_INFO.address}<br />{STORE_INFO.hours}
        </p>
      </div>
      <div className="space-y-2">
        <h3 className="font-heading font-semibold text-sm text-foreground flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" /> Importante
        </h3>
        <p className="text-xs text-muted-foreground">{STORE_INFO.warranty}</p>
        <p className="text-xs text-muted-foreground">{STORE_INFO.notes}</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-heading font-semibold text-sm text-foreground">Comunidad</h3>
        <p className="text-xs text-muted-foreground mb-2">Unite para ver mercadería entrante</p>
        <a
          href={WHATSAPP_COMMUNITY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp px-4 py-2 text-xs font-medium text-whatsapp-foreground hover:opacity-90"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Unirse al grupo de WhatsApp
        </a>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container mx-auto py-4">
        <p className="text-[11px] text-muted-foreground text-center">
          © {new Date().getFullYear()} {STORE_INFO.name} · Todos los productos son usados salvo que se indique lo contrario
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
