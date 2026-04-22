import { Link } from "wouter";
import { Wrench, MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md inline-block">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                مُعدّات 221
              </span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              متجرك الموثوق لبيع وتأجير المعدات والأدوات الاحترافية في المملكة العربية السعودية. جودة عالية وأسعار تنافسية.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/modat221" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">المنتجات</Link></li>
              <li><Link href="/rental" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">تأجير المعدات</Link></li>
              <li><Link href="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link href="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">تواصل معنا</Link></li>
              <li><Link href="/faq" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">السياسات</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">سياسة الشحن والتوصيل</Link></li>
              <li><Link href="/returns" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">سياسة الاستبدال والاسترجاع</Link></li>
              <li><Link href="/privacy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/payment" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">طرق الدفع</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>المملكة العربية السعودية - الرياض</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span dir="ltr">+966 53 668 8436</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>bndrfhd05366@yahoo.com</span>
              </li>
              <li className="text-sm text-secondary-foreground/60 pt-2">
                السجل التجاري: قيد الإصدار
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60 text-center md:text-right">
            © {new Date().getFullYear()} مُعدّات 221. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Payment Icons */}
            <div className="px-2 py-1 bg-white rounded text-xs font-bold text-[#149f98] border border-[#149f98]/20">tamara</div>
            <div className="px-2 py-1 bg-white rounded text-xs font-bold text-[#0060a9] border border-gray-200">mada</div>
            <div className="px-2 py-1 bg-white rounded text-xs font-bold text-[#1a1f71] border border-gray-200">VISA</div>
            <div className="px-2 py-1 bg-white rounded text-xs font-bold text-black border border-gray-200">Apple Pay</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
