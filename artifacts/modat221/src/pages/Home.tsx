import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, CreditCard, Clock, RotateCcw, Wallet } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  useDocumentTitle("الرئيسية");

  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="معدات احترافية"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-8 mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-[1.2] mb-6">
              معدّاتك الاحترافية...
              <br />
              <span className="text-primary">بيع وتأجير</span> في مكان واحد
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
              نحن نوفر لك أفضل المعدات والأدوات الاحترافية الموثوقة لتنفيذ مشاريعك بكفاءة عالية، مع خيارات مرنة للشراء أو الاستئجار، وخدمة عملاء على مدار الساعة.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/966536688436" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
                  تواصل واتساب
                </Button>
              </a>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                  تصفّح المنتجات
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تسوق حسب الفئة</h2>
            <p className="text-muted-foreground">مجموعة واسعة من الأدوات لتلبية جميع احتياجاتك</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/products?category=${category.name}`}>
                  <div className="bg-card hover:bg-primary/5 hover:border-primary/50 transition-all border border-border p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {/* Dynamic Icon fallback handling */}
                      <span className="font-bold text-2xl">{category.name.substring(0,1)}</span>
                    </div>
                    <span className="font-bold text-center">{category.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">المنتجات المميزة</h2>
              <p className="text-muted-foreground">أفضل المعدات مبيعاً وتقييماً من عملائنا</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden md:flex">عرض الكل</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">عرض الكل</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tamara Highlight */}
      <section className="py-12 bg-[#149f98]/10 border-y border-[#149f98]/20">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#149f98]/20">
              <span className="text-2xl font-black text-[#149f98]">tamara</span>
            </div>
            <div className="text-right text-balance">
              <h3 className="text-2xl font-bold text-foreground mb-2">قسّمها على 4 دفعات بدون فوائد مع تمارا</h3>
              <p className="text-muted-foreground font-medium">تسوق الآن وادفع لاحقاً، بدون رسوم خفية أو فوائد. متوفرة للطلبات فوق 100 ر.س.</p>
            </div>
            <Link href="/payment" className="md:mr-auto">
              <Button className="bg-[#149f98] hover:bg-[#118a84] text-white">اعرف المزيد</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Truck, title: "شحن سريع", desc: "توصيل لجميع مناطق المملكة" },
              { icon: ShieldCheck, title: "ضمان الجودة", desc: "منتجات أصلية 100%" },
              { icon: CreditCard, title: "دفع آمن", desc: "طرق دفع متعددة وموثوقة" },
              { icon: Clock, title: "خدمة 24/7", desc: "دعم فني على مدار الساعة" },
              { icon: RotateCcw, title: "تأجير مرن", desc: "خيارات يومية وأسبوعية" },
              { icon: Wallet, title: "تمارا متاحة", desc: "قسط مشترياتك بسهولة" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">متجرك الموثوق للأدوات الاحترافية في المملكة</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              نسعى لتمكين الحرفيين والمقاولين بأفضل المعدات والأدوات لتحويل أفكارهم إلى واقع. سواء كنت تبحث عن الشراء أو الاستئجار، نحن هنا لدعم نجاحك.
            </p>
            <Link href="/about">
              <Button size="lg" className="h-14 px-8 text-lg font-bold">تعرف على قصتنا</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
