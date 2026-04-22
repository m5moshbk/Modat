import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  useDocumentTitle("تواصل معنا");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-muted py-16 border-b">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-foreground">تواصل معنا</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لخدمتك والإجابة على جميع استفساراتك. لا تتردد في التواصل معنا عبر القنوات التالية.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-8 mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">اتصل بنا</h3>
                <p className="text-muted-foreground mb-2">متواجدون لاستقبال مكالماتكم</p>
                <p className="font-bold font-mono text-left" dir="ltr">+966 53 668 8436</p>
              </div>
            </div>

            <div className="bg-card border p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">واتساب</h3>
                <p className="text-muted-foreground mb-2">للاستفسارات والطلبات السريعة</p>
                <a href="https://wa.me/966536688436" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
                  تواصل الآن
                </a>
              </div>
            </div>

            <div className="bg-card border p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                <p className="text-muted-foreground mb-2">للاستفسارات الرسمية والشركات</p>
                <a href="mailto:bndrfhd05366@yahoo.com" className="font-medium hover:text-primary">bndrfhd05366@yahoo.com</a>
              </div>
            </div>

            <div className="bg-card border p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                <p className="text-muted-foreground">السبت - الخميس: 8 صباحاً - 8 مساءً</p>
                <p className="text-muted-foreground">الجمعة: مغلق</p>
              </div>
            </div>
          </div>

          {/* Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكريم</Label>
                    <Input id="name" placeholder="محمد عبدالله" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input id="phone" type="tel" placeholder="05XXXXXXXX" dir="ltr" className="text-right" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea id="message" placeholder="اكتب استفسارك هنا..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-lg">إرسال الرسالة</Button>
              </form>
            </div>

            <div className="bg-muted border rounded-3xl h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://api.maptiler.com/maps/basic-v2/256/0/0/0.png')] bg-cover bg-center"></div>
              <div className="relative z-10 flex flex-col items-center bg-background/90 p-6 rounded-2xl backdrop-blur-sm border shadow-lg">
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <h3 className="font-bold text-xl mb-1">موقعنا في الرياض</h3>
                <p className="text-muted-foreground">المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
