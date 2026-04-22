import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Terms() {
  useDocumentTitle("الشروط والأحكام");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 md:px-8 mx-auto mt-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-foreground border-b pb-6">الشروط والأحكام</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground leading-relaxed text-lg">
            مرحباً بكم في متجر معدّات 221. باستخدامكم لهذا الموقع الإلكتروني وإتمام أي عملية شراء أو تأجير، فإنكم توافقون على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-primary">1. التعريفات</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              "المتجر" يشير إلى متجر معدّات 221 الإلكتروني. "العميل/أنت" يشير إلى أي مستخدم يزور الموقع أو يقوم بعملية شراء/استئجار. "المنتجات" تشير إلى جميع المعدات والأدوات المعروضة في المتجر.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">2. استخدام الموقع والحساب</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              يجب أن يكون عمر العميل 18 عاماً أو أكثر لإجراء عمليات الشراء. يتحمل العميل مسؤولية الحفاظ على سرية بيانات حسابه وكلمة المرور، ويوافق على تحمل المسؤولية عن جميع الأنشطة التي تحدث تحت حسابه. يحتفظ المتجر بالحق في رفض تقديم الخدمة أو إنهاء الحسابات أو إلغاء الطلبات وفقاً لتقديره الخاص.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">3. الطلبات والأسعار</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              جميع الأسعار المعروضة في المتجر بالريال السعودي (SAR) وتشمل ضريبة القيمة المضافة ما لم يُنص على خلاف ذلك. نبذل قصارى جهدنا لضمان دقة الأسعار وتوافر المنتجات، ولكن قد تحدث أخطاء. في حال اكتشاف خطأ في سعر منتج قمت بطلبه، سنقوم بإبلاغك وإعطائك خيار تأكيد الطلب بالسعر الصحيح أو إلغائه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">4. الدفع</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نوفر طرق دفع إلكترونية آمنة تشمل البطاقات البنكية، أبل باي، وخدمات التقسيط مثل تمارا. في حالة استخدام خدمات التقسيط، يوافق العميل أيضاً على الشروط والأحكام الخاصة بمزود الخدمة (تمارا). المتجر لا يحتفظ بأي بيانات للبطاقات الائتمانية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">5. سياسات الشحن والاسترجاع</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              تخضع جميع الطلبات لسياسة الشحن والتوصيل، وسياسة الاستبدال والاسترجاع المنشورة في صفحات منفصلة على هذا الموقع، والتي تعتبر جزءاً لا يتجزأ من هذه الشروط والأحكام.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">6. شروط التأجير (إن وجدت)</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              المنتجات المتاحة للتأجير تخضع لعقود تأجير محددة توضح مدة الإيجار، مبلغ التأمين، مسؤولية العميل عن التلفيات، وإجراءات الإرجاع. سيتم تزويد العميل بكامل التفاصيل قبل إتمام عملية التأجير.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">7. حدود المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              المتجر غير مسؤول عن أي أضرار مباشرة، غير مباشرة، عرضية، أو تبعية ناتجة عن استخدام المنتجات المشتراة أو المستأجرة، أو الاستخدام الخاطئ لها. تقع مسؤولية اتباع إرشادات السلامة والتشغيل على عاتق العميل بالكامل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">8. حقوق الملكية الفكرية</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              جميع محتويات الموقع من نصوص، صور، رسومات، شعارات، وتصاميم هي ملك حصري لمتجر معدّات 221 أو لمورديها، وهي محمية بموجب قوانين حقوق النشر. يُمنع استخدامها أو نسخها لأغراض تجارية دون إذن كتابي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">9. القانون الحاكم والتعديلات</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              تخضع هذه الشروط والأحكام وتُفسر وفقاً للأنظمة والقوانين المعمول بها في المملكة العربية السعودية. يحتفظ المتجر بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق، ويعتبر استمرارك في استخدام الموقع بعد أي تغييرات موافقة منك عليها.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
