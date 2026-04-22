import { useDocumentTitle } from "@/hooks/use-document-title";
import { CreditCard, CheckCircle2 } from "lucide-react";

export default function Payment() {
  useDocumentTitle("طرق الدفع");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-muted py-16 border-b">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">طرق الدفع</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر مجموعة متنوعة من خيارات الدفع الآمنة لتسهيل تجربة تسوقك، بما في ذلك خدمات التقسيط المريحة.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-16 max-w-5xl">
        
        {/* Tamara Featured */}
        <div className="bg-white border-2 border-[#149f98]/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#149f98]/10 rounded-br-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-right text-black">
              <h2 className="text-3xl font-black mb-4">قسّمها على 4 دفعات شهرية بدون فوائد ولا رسوم!</h2>
              <p className="text-lg text-gray-600 mb-6">
                تسوق جميع ما تحتاجه من معدات الآن، وادفع على راحتك مع تمارا. بدون أي فوائد خفية، الشريعة الإسلامية هي مرجعنا.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#149f98]" />
                  دفعات متساوية بدون رسوم تأخير
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#149f98]" />
                  موافقة فورية في ثوانٍ
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#149f98]" />
                  متوفرة للطلبات من 100 إلى 5000 ر.س
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-[#149f98] text-white px-8 py-6 rounded-2xl text-center transform rotate-2 shadow-lg">
                <div className="text-4xl font-black tracking-wider mb-2" dir="ltr">tamara</div>
                <div className="text-sm opacity-90">الدفع الآجل صار أسهل</div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Payment Methods */}
        <h3 className="text-2xl font-bold mb-6">خيارات الدفع المتاحة</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-card border p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl text-blue-600 dark:text-blue-400">mada</span>
            </div>
            <h4 className="font-bold text-lg">بطاقة مدى</h4>
            <p className="text-sm text-muted-foreground">دفع آمن ومباشر من حسابك البنكي متوافق مع الشبكة السعودية.</p>
          </div>

          <div className="bg-card border p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl text-black dark:text-white">Apple Pay</span>
            </div>
            <h4 className="font-bold text-lg">أبل باي</h4>
            <p className="text-sm text-muted-foreground">طريقة سريعة وآمنة للدفع باستخدام أجهزة أبل الخاصة بك.</p>
          </div>

          <div className="bg-card border p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-slate-700 dark:text-slate-300" />
            </div>
            <h4 className="font-bold text-lg">البطاقات الائتمانية</h4>
            <p className="text-sm text-muted-foreground">نقبل جميع بطاقات فيزا وماستركارد العالمية بمعايير أمان عالية.</p>
          </div>

          <div className="bg-card border p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
            </div>
            <h4 className="font-bold text-lg">الدفع عند الاستلام</h4>
            <p className="text-sm text-muted-foreground">متوفر لمدينة الرياض فقط بحد أقصى للطلبات 2000 ر.س.</p>
          </div>

          <div className="bg-card border p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <h4 className="font-bold text-lg">التحويل البنكي</h4>
            <p className="text-sm text-muted-foreground">قم بتحويل المبلغ لحساب مؤسستنا في بنك الراجحي أو الأهلي.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
