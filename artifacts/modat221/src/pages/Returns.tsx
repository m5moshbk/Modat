import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Returns() {
  useDocumentTitle("سياسة الاستبدال والاسترجاع");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 md:px-8 mx-auto mt-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-foreground border-b pb-6">سياسة الاستبدال والاسترجاع</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground leading-relaxed text-lg font-medium">
            حرصاً منا في متجر معدّات 221 على تقديم أفضل خدمة عملاء وضمان رضاكم، قمنا بوضع سياسة مرنة وواضحة للاستبدال والاسترجاع وفقاً لأنظمة وزارة التجارة في المملكة العربية السعودية.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-primary">1. فترة الاسترجاع والاستبدال</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              يحق للعميل استرجاع المنتجات خلال (7) أيام من تاريخ استلام الطلب، واستبدالها خلال (14) يوماً من تاريخ الاستلام، بشرط استيفاء الشروط المذكورة أدناه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">2. شروط الاسترجاع والاستبدال</h2>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2 pr-4">
              <li>أن يكون المنتج في حالته الأصلية وبغلافه الأصلي غير المفتوح أو المتضرر.</li>
              <li>عدم استخدام المنتج أو تشغيله بأي شكل من الأشكال.</li>
              <li>توفر جميع الملحقات، الكتيبات، والهدايا (إن وجدت) التي أرفقت مع المنتج.</li>
              <li>إرفاق الفاتورة الأصلية للطلب.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">3. المنتجات غير القابلة للاسترجاع</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              حفاظاً على سلامة عملائنا وجودة المعدات، نعتذر عن عدم استرجاع أو استبدال الحالات التالية (إلا في حال وجود عيب مصنعي):
            </p>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2 pr-4">
              <li>المنتجات التي تم فتح غلافها الأصلي أو استخدامها.</li>
              <li>المنتجات التي تعرضت للتلف أو سوء الاستخدام من قبل العميل.</li>
              <li>المعدات التي تم تأجيرها (تخضع لشروط وأحكام التأجير الخاصة).</li>
              <li>القطع الاستهلاكية والملحقات.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">4. خطوات تقديم طلب الاسترجاع</h2>
            <ol className="text-muted-foreground leading-relaxed mt-4 list-decimal list-inside space-y-2 pr-4">
              <li>التواصل مع خدمة العملاء عبر الواتساب أو البريد الإلكتروني مع تزويدنا برقم الطلب وتوضيح سبب الاسترجاع.</li>
              <li>سيتم مراجعة الطلب والموافقة عليه المبدئية خلال 24-48 ساعة عمل.</li>
              <li>سنقوم بإصدار بوليصة استرجاع وتزويد العميل بها لتسليم المنتج لأقرب فرع لشركة الشحن.</li>
              <li>بعد استلامنا للمنتج وفحصه والتأكد من مطابقته للشروط، سيتم إتمام عملية الإرجاع.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">5. استرداد المبلغ</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              في حالة الدفع عبر البطاقات الائتمانية (مدى، فيزا، ماستركارد) أو أبل باي، سيتم إعادة المبلغ إلى نفس الحساب البنكي المستخدم في عملية الشراء. تستغرق عملية استرداد المبلغ من 5 إلى 7 أيام عمل حسب سياسة البنك المصدر. في حالة الشراء عبر خدمة "تمارا"، سيتم تحديث خطة الدفع الخاصة بك وإرجاع المبالغ المدفوعة عبر منصة تمارا مباشرة وفقاً لسياساتهم.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">6. تكاليف الشحن</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              إذا كان الاسترجاع بسبب خطأ من قبل المتجر أو وجود عيب مصنعي في المنتج، يتحمل المتجر كافة تكاليف الشحن. أما إذا كان الاسترجاع بناءً على رغبة العميل (تغيير رأي)، يتحمل العميل رسوم الشحن للإرجاع بالإضافة إلى رسوم الشحن الأصلية (حتى وإن كان الشحن مجانياً سيتم خصم قيمته).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
