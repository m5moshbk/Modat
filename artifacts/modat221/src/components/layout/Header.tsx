import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, Wrench } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/products", label: "المنتجات" },
    { href: "/rental", label: "التأجير" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                مُعدّات 221
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="relative" onClick={() => {}}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>
            
            <a href="https://wa.me/966536688436" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button>
                تواصل واتساب
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/966536688436" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">تواصل واتساب</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
