import Header, { StoreInfoBar } from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
