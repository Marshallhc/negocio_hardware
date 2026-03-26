import { useEffect, useRef } from "react";
import Header, { StoreInfoBar } from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const hH = headerRef.current?.offsetHeight ?? 52;
      const iH = infoRef.current?.offsetHeight ?? 36;
      document.documentElement.style.setProperty("--header-h", `${hH}px`);
      document.documentElement.style.setProperty("--info-h", `${iH}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div ref={headerRef}><Header /></div>
      <div ref={infoRef}><StoreInfoBar /></div>
      <main className="flex-1">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
