import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Privacy() {
  useDocumentTitle("سياسة الخصوصية");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 md:px-8 mx-auto mt-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-foreground border-b pb-6">سياسة الخصوصية</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground leading-relaxed text-lg">
            نحن في متجر معدّات 221 نأخذ خصوصيتك وحماية بياناتك الشخصية على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمعنا، استخدامنا، ومشاركتنا لمعلوماتك عند استخدامك لموقعنا الإلكتروني.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-primary">1. المعلومات التي نجمعها</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              قد نقوم بجمع المعلومات التالية عند استخدامك لخدماتنا:
            </p>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2 pr-4">
              <li><strong>المعلومات الشخصية:</strong> الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وعنوان التوصيل عند إنشاء حساب أو إتمام طلب.</li>
              <li><strong>معلومات الدفع:</strong> يتم معالجة بيانات بطاقات الدفع عبر بوابات دفع آمنة ومشفرة، نحن لا نقوم بتخزين أرقام البطاقات الائتمانية في خوادمنا.</li>
              <li><strong>معلومات الاستخدام:</strong> بيانات حول كيفية تفاعلك مع الموقع، مثل الصفحات التي تزورها والروابط التي تنقر عليها وعنوان بروتوكول الإنترنت (IP).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">2. استخدام المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2 pr-4">
              <li>معالجة طلباتك وتوصيل المنتجات والمعدات.</li>
              <li>التواصل معك بخصوص طلبك، وتزويدك بتحديثات الشحن.</li>
              <li>الرد على استفساراتك وتقديم دعم فني متميز للعملاء.</li>
              <li>تحسين جودة المتجر وتجربة المستخدم وتطوير منتجاتنا.</li>
              <li>إرسال العروض الترويجية والإعلانات (يمكنك إلغاء الاشتراك في أي وقت).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">3. مشاركة المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نحن لا نبيع أو نؤجر معلوماتك الشخصية لجهات خارجية. قد نشارك معلوماتك الضرورية فقط مع أطراف ثالثة موثوقة لغرض إتمام الخدمة، مثل:
            </p>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc list-inside space-y-2 pr-4">
              <li><strong>شركات الشحن والتوصيل:</strong> لتوصيل طلباتك لعنوانك.</li>
              <li><strong>مزودي خدمات الدفع (مثل تمارا):</strong> لمعالجة المدفوعات وتوفير خدمات التقسيط الآمنة.</li>
              <li><strong>الجهات القانونية:</strong> عند الطلب من قبل السلطات المختصة وفقاً للقوانين والأنظمة المعمول بها في المملكة العربية السعودية.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">4. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              يستخدم المتجر ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك. تساعدنا هذه الملفات في تحليل حركة المرور وتقديم محتوى مخصص. يمكنك التحكم في إعدادات ملفات تعريف الارتباط عبر متصفحك الخاص، ولكن تعطيلها قد يؤثر على بعض وظائف الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">5. أمن البيانات</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نحن نطبق إجراءات وتقنيات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به، التعديل، أو الكشف عنها. جميع عمليات نقل البيانات تتم عبر اتصالات مشفرة باستخدام تقنية (SSL).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">6. حقوق المستخدم</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              يحق لك الوصول إلى معلوماتك الشخصية المحفوظة لدينا، وتحديثها، أو طلب حذف حسابك وبياناتك بالتواصل مع فريق الدعم الفني.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">7. التعديلات على السياسة</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              نحتفظ بالحق في تحديث أو تغيير سياسة الخصوصية من وقت لآخر لتعكس التغييرات في ممارساتنا. سيتم نشر أي تعديلات على هذه الصفحة.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
