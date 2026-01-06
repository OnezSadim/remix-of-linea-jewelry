import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const sizes = ["S", "M", "L", "XL", "2XL"];

  return (
    <div className="space-y-6">
      {/* Breadcrumb - Desktop only */}
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-muted-foreground hover:text-primary font-mono text-xs uppercase tracking-wider">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-muted-foreground">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground font-mono text-xs uppercase tracking-wider">Product</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product title and price */}
      <div className="space-y-2">
        <p className="text-xs font-mono text-primary uppercase tracking-widest">// HOODIE</p>
        <h1 className="text-2xl md:text-3xl font-display tracking-wider text-foreground">BISHU GLITCH HOODIE</h1>
        <p className="text-xl font-mono text-foreground">$85</p>
      </div>

      {/* Size selector */}
      <div className="space-y-3 py-4 border-t border-b border-border">
        <h3 className="text-sm font-mono text-foreground uppercase tracking-wider">Size</h3>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border text-sm font-mono uppercase transition-colors ${
                selectedSize === size
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-3 py-4 border-b border-border">
        <div className="flex justify-between">
          <span className="text-sm font-mono text-muted-foreground">Material</span>
          <span className="text-sm font-mono text-foreground">100% Cotton</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-mono text-muted-foreground">Weight</span>
          <span className="text-sm font-mono text-foreground">400 GSM Heavyweight</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-mono text-muted-foreground">Fit</span>
          <span className="text-sm font-mono text-foreground">Oversized</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-mono text-muted-foreground">Print</span>
          <span className="text-sm font-mono text-foreground">Screen Print</span>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-foreground uppercase tracking-wider">Qty</span>
          <div className="flex items-center border border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              className="h-10 w-10 p-0 hover:bg-muted/50 hover:text-primary rounded-none border-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-mono min-w-12 justify-center border-l border-r border-border">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              className="h-10 w-10 p-0 hover:bg-muted/50 hover:text-primary rounded-none border-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button 
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-hover font-mono uppercase tracking-wider rounded-none"
          disabled={!selectedSize}
        >
          {selectedSize ? 'Add to Cart' : 'Select Size'}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
