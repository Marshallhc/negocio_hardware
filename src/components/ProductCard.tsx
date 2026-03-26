import { useState } from "react";
import { MessageCircle, Package, Box, AlertTriangle, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentImage, setCurrentImage] = useState(0);
  const images = product.images ?? [];

  const whatsappMessage = encodeURIComponent(
    `Hola! Estoy interesado en: ${product.name} - ${product.brand} (${formatPrice(product.price)})`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="group bg-card border border-border flex flex-col justify-between transition-all hover:shadow-md hover:border-primary/30 animate-fade-in overflow-hidden">
      {/* Image area */}
      {images.length > 0 ? (
        <div className="relative w-full aspect-[4/3] bg-muted">
          <img
            src={images[currentImage]}
            alt={`${product.name} ${product.brand}`}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-1 text-foreground hover:bg-background/90 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm p-1 text-foreground hover:bg-background/90 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImage ? "bg-primary" : "bg-background/60"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
        </div>
      )}

      <div className="p-4 flex flex-col justify-between gap-3 flex-1">
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
              {product.hasBox ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 bg-accent text-accent-foreground">
                  <Box className="w-3 h-3" /> Con caja
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 bg-secondary text-secondary-foreground">
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
            className="inline-flex items-center gap-1.5 bg-whatsapp px-3 py-2 text-xs font-medium text-whatsapp-foreground transition-all hover:opacity-90 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
