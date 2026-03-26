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
      {/* Filters — sticky below header+infobar */}
      <div className="sticky top-[120px] z-30 bg-background py-3 -mx-4 px-4 border-b border-border mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por modelo, marca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-input bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`whitespace-nowrap px-3 py-2 text-xs font-medium transition-colors ${
                  category === c.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-input bg-card px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-heading">No se encontraron productos</p>
          <p className="text-sm mt-1">Probá con otra búsqueda o categoría</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
