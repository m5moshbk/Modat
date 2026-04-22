import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  useDocumentTitle("المنتجات");
  const [searchParams] = useLocation(); // Actually we might just use state, or simple parsing
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.includes(searchQuery) || p.description.includes(searchQuery);
      const matchesCat = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-muted/30 py-12 border-b">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">المنتجات</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">تصفح مجموعتنا الواسعة من المعدات الاحترافية المتاحة للبيع والتأجير.</p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4">البحث</h3>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن منتج..."
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">الفئات</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  الكل
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.name)}
                    className="rounded-full"
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed">
                <h3 className="text-xl font-bold mb-2">لا توجد منتجات</h3>
                <p className="text-muted-foreground">لم يتم العثور على منتجات تطابق معايير البحث الخاصة بك.</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                >
                  مسح الفلاتر
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
