import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products, type Product } from "@/data/products";
import ProductCard from "./ProductCard";

type Category = "all" | Product["category"];
type SortOption = "price-asc" | "price-desc" | "name";

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "gpu-nvidia", label: "GPU NVIDIA" },
  { value: "gpu-amd", label: "GPU AMD" },
  { value: "psu", label: "Fuentes" },
  { value: "combo", label: "Combos" },
];

const SORTS: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
  { value: "name", label: "Nombre" },
];

const ProductGrid = () => {
  const [category, setCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("price-asc");

  const filtered = useMemo(() => {
    let items = products;
    if (category !== "all") items = items.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.note?.toLowerCase().includes(q)
      );
    }
    items = [...items].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
    return items;
  }, [category, search, sort]);

  return (
    <section className="container mx-auto py-6">
      {/* Filters — Mantiene el cálculo de altura exacto para no romper el scroll móvil */}
      <div 
        className="sticky z-30 bg-background/95 backdrop-blur-md py-3 -mx-4 px-4 border-b border-border mb-6 transition-all" 
        style={{top: 'calc(var(--header-h, 60px) + var(--info-h, 40px) - 1.5px)'}}
      >
        <div className="flex flex-col gap-3">
          
          {/* Fila superior: Buscador + Ordenar */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-input bg-card pl-9 pr-4 py-2 text-sm text-foreground rounded-md focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            {/* Selector de ordenamiento compacto en móvil */}
            <div className="flex items-center gap-1.5 bg-card border border-input px-2 py-2 rounded-md">
              <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="bg-transparent text-[11px] font-bold uppercase tracking-tighter focus:outline-none appearance-none cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {/* Abreviamos el texto en móvil si es necesario */}
                    {s.label.replace("precio", "").trim()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fila inferior: Categorías en scroll horizontal */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`whitespace-nowrap px-3 py-1.5 text-[11px] font-bold uppercase tracking-tight rounded-md border transition-all ${
                  category === c.value
                    ? "bg-primary border-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/50 border-transparent text-muted-foreground hover:bg-secondary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-4 px-1">
        {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card/50 rounded-xl border border-dashed border-border">
          <p className="text-lg font-heading font-semibold">Sin resultados</p>
          <p className="text-sm text-muted-foreground">Intentá con otros filtros</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;