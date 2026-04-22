import { useDocumentTitle } from "@/hooks/use-document-title";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  useDocumentTitle("من نحن");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-muted py-16 border-b">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">من نحن</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرف على قصة متجر معدّات 221، ورؤيتنا في دعم قطاع المقاولات والصيانة في المملكة العربية السعودية.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-16 max-w-4xl space-y-16">
        <section className="prose prose-zinc dark:prose-invert max-w-none text-lg">
          <h2 className="text-3xl font-bold text-foreground">قصة المتجر</h2>
          <p className="text-muted-foreground leading-relaxed">
            تأسس متجر معدّات 221 في مدينة الرياض لتلبية الحاجة المتزايدة في السوق السعودي لمصدر موثوق واحترافي يوفر أفضل المعدات والأدوات الصناعية. لاحظنا أن الكثير من الحرفيين والمقاولين يواجهون صعوبة في إيجاد معدات ذات جودة عالية بأسعار مناسبة، أو يضطرون لشراء معدات مكلفة لمشاريع قصيرة الأجل. ومن هنا جاءت فكرة المتجر لتقديم حلول شاملة تجمع بين خيارات الشراء والتأجير المرن، لتمكين عملائنا من إنجاز أعمالهم بكفاءة وبأقل تكلفة ممكنة.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-primary">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              أن نكون الخيار الأول والوجهة الموثوقة لكل من يبحث عن المعدات والأدوات الاحترافية في المملكة العربية السعودية، وأن نساهم في دعم النهضة العمرانية والصناعية من خلال توفير حلول مبتكرة ومرنة.
            </p>
          </div>
          <div className="bg-card border p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-primary">رسالتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              تقديم منتجات عالية الجودة وخدمات استثنائية تفوق توقعات عملائنا، مع الالتزام بالشفافية والأسعار التنافسية وتوفير الدعم الفني المستمر لضمان استمرارية أعمالهم دون توقف.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "الجودة أولاً", desc: "ننتقي بعناية المنتجات من أفضل العلامات التجارية العالمية لضمان الأداء الفائق." },
              { title: "المرونة والابتكار", desc: "نقدم خيارات متعددة كالبيع والتأجير لتناسب احتياجات كافة الفئات والمشاريع." },
              { title: "الشفافية والنزاهة", desc: "نتعامل بوضوح تام في التسعير والشروط والأحكام لضمان ثقة عملائنا الدائمة." },
              { title: "رضا العميل", desc: "نضع احتياجات العميل في قمة أولوياتنا ونعمل جاهدين لتقديم أفضل خدمة ممكنة." },
            ].map((val, i) => (
              <div key={i} className="flex gap-4 p-6 bg-muted/30 rounded-2xl border">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
