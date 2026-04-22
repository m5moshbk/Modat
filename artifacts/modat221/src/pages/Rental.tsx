import { useDocumentTitle } from "@/hooks/use-document-title";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { ShieldAlert, IdCard, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Rental() {
  useDocumentTitle("تأجير المعدات");
  
  const rentalProducts = products.filter(p => p.priceRentDaily !== undefined);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary/10 py-16 border-b border-primary/20">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">تأجير المعدات</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر لك خيارات مرنة لاستئجار المعدات والأدوات الاحترافية لمشاريعك، سواء كنت تحتاجها ليوم واحد أو لعدة أشهر.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">شروط وأحكام التأجير</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: IdCard, title: "إثبات الهوية", desc: "يتطلب إبراز الهوية الوطنية أو الإقامة السارية عند استلام المعدات." },
            { icon: ShieldAlert, title: "مبلغ التأمين", desc: "يتم دفع مبلغ تأمين مسترد يحدد بناءً على قيمة المعدات المستأجرة." },
            { icon: RotateCcw, title: "حالة الإرجاع", desc: "يجب إرجاع المعدات في نفس الحالة التي تم استلامها بها ونظيفة." },
            { icon: Truck, title: "خدمة التوصيل", desc: "تتوفر خدمة التوصيل والاستلام للمواقع برسوم إضافية حسب المنطقة." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border p-6 rounded-2xl text-center flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8">المعدات المتاحة للتأجير</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalProducts.map((product, i) => (
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
      </div>
    </div>
  );
}
