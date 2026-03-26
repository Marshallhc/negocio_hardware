import { MessageCircle, Package, Box, AlertTriangle } from "lucide-react";
import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/data/products";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(price);

const getCategoryIcon = (category: Product["category"]) => {
  switch (category) {
    case "gpu-nvidia": return "🟢";
    case "gpu-amd": return "🔴";
    case "psu": return "⚡";
    case "combo": return "🔧";
  }
};

const ProductCard = ({ product }: { product: Product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hola! Estoy interesado en: ${product.name} - ${product.brand} (${formatPrice(product.price)})`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="group bg-card rounded-lg border border-border p-4 flex flex-col justify-between gap-3 transition-all hover:shadow-md hover:border-primary/30 animate-fade-in">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-sm">{getCategoryIcon(product.category)}</span>
              <h3 className="font-heading font-semibold text-sm text-foreground truncate">{product.name}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{product.brand}</p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            {product.hasBox && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-accent text-accent-foreground">
                <Box className="w-3 h-3" /> Con caja
              </span>
            )}
            {!product.hasBox && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                <Package className="w-3 h-3" /> Sin caja
              </span>
            )}
          </div>
        </div>

        {product.note && (
          <p className="text-[11px] text-muted-foreground flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-destructive" />
            {product.note}
          </p>
        )}
      </div>

      <div className="flex items-end justify-between gap-2 pt-2 border-t border-border">
        <span className="font-heading font-bold text-lg text-foreground">{formatPrice(product.price)}</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-xs font-medium text-whatsapp-foreground transition-all hover:opacity-90 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
