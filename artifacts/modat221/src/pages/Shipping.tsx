import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Shipping() {
  useDocumentTitle("سياسة الشحن والتوصيل");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 md:px-8 mx-auto mt-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-foreground border-b pb-6">سياسة الشحن والتوصيل</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary">1. مناطق التغطية</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نسعى في متجر معدّات 221 لتقديم خدماتنا لأكبر شريحة ممكنة. حالياً نقوم بالشحن وتوصيل الطلبات إلى جميع المدن والمناطق الرئيسية داخل المملكة العربية السعودية. يرجى التأكد من إدخال عنوان التوصيل بدقة لضمان وصول الشحنة في الوقت المحدد.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">2. رسوم الشحن</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              تختلف رسوم الشحن بناءً على وزن وحجم المنتجات المطلوبة والمدينة الموجه إليها الطلب. يتم احتساب وعرض تكلفة الشحن النهائية بوضوح في صفحة إتمام الطلب قبل إتمام عملية الدفع. نوفر شحناً مجانياً للطلبات التي تتجاوز قيمتها حداً معيناً يتم الإعلان عنه في الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">3. أوقات التسليم</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نعمل جاهدين لتجهيز وشحن طلباتكم في أسرع وقت. يستغرق توصيل الطلبات داخل مدينة الرياض عادةً بين 1 إلى 2 يوم عمل. أما للطلبات خارج مدينة الرياض، فتستغرق عملية التوصيل من 3 إلى 5 أيام عمل، وقد تزيد هذه المدة قليلاً خلال مواسم العروض والأعياد والإجازات الرسمية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">4. تتبع الشحنة</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              بمجرد تأكيد طلبك وتسليمه لشركة الشحن، سيتم إرسال رسالة نصية (SMS) أو بريد إلكتروني يحتوي على رقم بوليصة الشحن ورابط لتتبع حالة طلبك مباشرة عبر موقع شركة الشحن المتعاقد معها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">5. الشحن الدولي</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              في الوقت الحالي، خدماتنا تقتصر على التوصيل داخل حدود المملكة العربية السعودية فقط. لا يتوفر لدينا الشحن الدولي، وسنقوم بالإعلان عن أي توسع لخدماتنا مستقبلاً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">6. التسليم الفاشل</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              في حال عدم تمكن شركة الشحن من التواصل مع العميل أو استلامه للطلب في الوقت المحدد لعدة محاولات، سيتم إرجاع الشحنة إلى متجرنا. في هذه الحالة، يتحمل العميل رسوم الشحن للإرجاع ولإعادة الإرسال مرة أخرى. يرجى التأكد من التجاوب مع مناديب التوصيل لتفادي أي تأخير.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
