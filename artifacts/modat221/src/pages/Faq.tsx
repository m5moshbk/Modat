import { useDocumentTitle } from "@/hooks/use-document-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  useDocumentTitle("الأسئلة الشائعة");

  const faqs = [
    {
      q: "هل المنتجات أصلية ومضمونة؟",
      a: "نعم، جميع المنتجات المعروضة في متجر معدّات 221 أصلية 100% وتأتي من وكلائها المعتمدين في المملكة العربية السعودية، وهي مشمولة بضمان الوكيل كما هو موضح في صفحة كل منتج."
    },
    {
      q: "كيف يمكنني الدفع عبر تمارا؟",
      a: "عند الوصول إلى صفحة الدفع، اختر 'تمارا' كطريقة الدفع. سيتم تحويلك لصفحة تمارا لإدخال رقم جوالك وتأكيد هويتك، ثم يمكنك دفع ربع المبلغ الآن والباقي مقسم على 3 أشهر بدون فوائد."
    },
    {
      q: "هل توفرون خدمة التوصيل خارج الرياض؟",
      a: "نعم، نوفر خدمة الشحن لجميع مناطق ومدن المملكة العربية السعودية عبر شركات شحن موثوقة تستغرق عادة من 3 إلى 5 أيام عمل."
    },
    {
      q: "ما هي شروط استئجار المعدات؟",
      a: "لاستئجار المعدات، يتطلب إبراز الهوية الوطنية السارية، ودفع مبلغ تأمين مسترد يحدد حسب قيمة المعدة، والتوقيع على نموذج الاستلام والإرجاع، مع الالتزام بإرجاع المعدة في حالتها النظيفة والسليمة."
    },
    {
      q: "كم تستغرق عملية استرداد المبلغ عند الإرجاع؟",
      a: "بعد استلامنا للمنتج وفحصه، يتم تحويل المبلغ إلى حسابك البنكي خلال 5 إلى 7 أيام عمل حسب سياسة البنك الخاص بك."
    },
    {
      q: "هل يمكنني استبدال منتج بآخر؟",
      a: "نعم، يمكنك استبدال المنتج خلال 14 يوماً من استلامه بشرط أن يكون في حالته الأصلية وغير مستخدم، مع تحمل العميل لتكاليف الشحن الإضافية."
    },
    {
      q: "كيف يمكنني تتبع طلبي؟",
      a: "بمجرد شحن طلبك، ستتلقى رسالة نصية تحتوي على رقم بوليصة الشحن ورابط لتتبع حالة طلبك خطوة بخطوة."
    },
    {
      q: "هل يوجد رسوم تأخير عند الدفع بتمارا؟",
      a: "تمارا لا تفرض أي فوائد، ولكن قد يتم تطبيق رسوم تأخير رمزية وفقاً لشروط تمارا في حال التأخر عن سداد الدفعة في موعدها. يمكنك مراجعة شروط تمارا للمزيد من التفاصيل."
    },
    {
      q: "ماذا أفعل إذا استلمت منتجاً تالفاً؟",
      a: "نعتذر عن ذلك. يرجى التواصل مع خدمة العملاء فوراً (خلال 24 ساعة من الاستلام) عبر الواتساب مع إرفاق صور للمنتج التالف، وسنقوم باستبداله لك مجاناً أو استرداد مبلغك."
    },
    {
      q: "هل يوجد حد أقصى للتقسيط مع تمارا؟",
      a: "نعم، الحد الأقصى للطلبات عبر تمارا يعتمد على تقييمك الائتماني لديهم، وغالباً ما يكون بين 2500 إلى 5000 ريال سعودي."
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-muted py-16 border-b">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">الأسئلة الشائعة</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            جمعنا لك إجابات لأكثر الأسئلة التي تصلنا لمساعدتك في الحصول على تجربة تسوق سلسة.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-xl px-6">
              <AccordionTrigger className="text-right font-bold text-lg hover:no-underline py-4 text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
