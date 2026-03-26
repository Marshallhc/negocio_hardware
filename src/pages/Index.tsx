import { useEffect, useRef } from "react";
import Header, { StoreInfoBar } from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const header = wrapperRef.current.querySelector("[data-header]");
      const info = wrapperRef.current.querySelector("[data-infobar]");
      const hH = header?.getBoundingClientRect().height ?? 52;
      const iH = info?.getBoundingClientRect().height ?? 36;
      document.documentElement.style.setProperty("--header-h", `${hH}px`);
      document.documentElement.style.setProperty("--info-h", `${iH}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={wrapperRef} className="min-h-screen bg-background flex flex-col">
      <Header />
      <StoreInfoBar />
      <main className="flex-1">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
