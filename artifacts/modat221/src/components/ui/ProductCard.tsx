import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-square bg-muted/30 overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {product.inStock && (
              <Badge variant="default" className="bg-green-600 hover:bg-green-700 shadow-sm">
                متوفر
              </Badge>
            )}
          </div>
          
          <div className="absolute top-2 left-2">
             <Badge variant="outline" className="bg-white/90 text-xs backdrop-blur-sm shadow-sm border-[#149f98]/30 text-[#149f98]">
              قسطها على 4
            </Badge>
          </div>
        </div>

        <CardContent className="flex-1 p-4">
          <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
          <h3 className="font-bold text-base line-clamp-2 leading-tight mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex items-end gap-1">
              <span className="text-xl font-bold text-primary">{product.priceBuy}</span>
              <span className="text-sm font-medium text-muted-foreground mb-1">ر.س</span>
            </div>
            {product.priceRentDaily && (
              <div className="text-sm text-muted-foreground">
                التأجير يبدأ من {product.priceRentDaily} ر.س/يوم
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 gap-2">
          <Link href={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
              <Eye className="w-4 h-4 ml-2" />
              عرض التفاصيل
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
