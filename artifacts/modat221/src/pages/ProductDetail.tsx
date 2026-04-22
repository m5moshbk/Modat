import { useDocumentTitle } from "@/hooks/use-document-title";
import { useRoute, Link } from "wouter";
import { products } from "@/data/products";
import NotFound from "./not-found";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  const product = products.find((p) => p.id === productId);

  useDocumentTitle(product ? product.name : "المنتج غير موجود");

  if (!product) return <NotFound />;

  const whatsappMessageBuy = encodeURIComponent(`مرحباً، أود الاستفسار عن شراء منتج: ${product.name}`);
  const whatsappMessageRent = encodeURIComponent(`مرحباً، أود الاستفسار عن استئجار منتج: ${product.name}`);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4 md:px-8 mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">المنتجات</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden bg-muted border p-4 flex items-center justify-center h-[400px] lg:h-[600px]"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-black mb-4 text-foreground leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border mb-8">
              <div className="mb-4">
                <span className="text-sm text-muted-foreground block mb-1">سعر الشراء</span>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-primary">{product.priceBuy}</span>
                  <span className="text-lg font-bold text-muted-foreground pb-1">ر.س</span>
                </div>
              </div>

              {/* Tamara */}
              <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-[#149f98]/20 mt-4">
                <div className="bg-[#149f98]/10 p-2 rounded-lg text-[#149f98] font-bold text-sm">tamara</div>
                <div className="text-sm font-medium">
                  قسّمها على 4 دفعات بقيمة <span className="font-bold">{(product.priceBuy / 4).toFixed(2)} ر.س</span> بدون رسوم أو فوائد.
                </div>
              </div>
            </div>

            {/* Rent Pricing */}
            {product.priceRentDaily && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  خيارات التأجير
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="border rounded-xl p-4 bg-background">
                    <div className="text-sm text-muted-foreground mb-1">يومي</div>
                    <div className="font-bold text-xl">{product.priceRentDaily} <span className="text-xs">ر.س</span></div>
                  </div>
                  {product.priceRentWeekly && (
                    <div className="border rounded-xl p-4 bg-background">
                      <div className="text-sm text-muted-foreground mb-1">أسبوعي</div>
                      <div className="font-bold text-xl">{product.priceRentWeekly} <span className="text-xs">ر.س</span></div>
                    </div>
                  )}
                  {product.priceRentMonthly && (
                    <div className="border rounded-xl p-4 bg-primary/5 border-primary/20">
                      <div className="text-sm text-primary font-medium mb-1">شهري (توفير)</div>
                      <div className="font-bold text-xl">{product.priceRentMonthly} <span className="text-xs">ر.س</span></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 mt-auto">
              <a href={`https://wa.me/966536688436?text=${whatsappMessageBuy}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب للشراء
                </Button>
              </a>
              {product.priceRentDaily && (
                <a href={`https://wa.me/966536688436?text=${whatsappMessageRent}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full h-14 text-lg border-primary text-primary hover:bg-primary/5">
                    <Phone className="w-5 h-5 ml-2" />
                    واتساب للاستئجار
                  </Button>
                </a>
              )}
            </div>

            {/* Specs */}
            <div>
              <h3 className="font-bold text-lg mb-4 border-b pb-2">المواصفات التقنية</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {Object.entries(product.specs).map(([key, value]) => {
                  if (!value) return null;
                  const labels: Record<string, string> = {
                    brand: "العلامة التجارية",
                    power: "الطاقة",
                    voltage: "الجهد",
                    weight: "الوزن",
                    warranty: "الضمان"
                  };
                  return (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-dashed">
                      <span className="text-muted-foreground">{labels[key] || key}</span>
                      <span className="font-bold text-left" dir="ltr">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
