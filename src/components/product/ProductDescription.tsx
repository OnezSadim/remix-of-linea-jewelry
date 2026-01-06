import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDescription = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {/* Description */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-primary font-mono uppercase tracking-wider rounded-none"
        >
          <span>Description</span>
          {isDescriptionOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4">
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              Premium heavyweight hoodie featuring the signature Bishu glitch logo. 
              Designed for maximum comfort and style, this oversized silhouette pairs 
              perfectly with any streetwear look.
            </p>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              Each piece is screen printed on 400 GSM cotton for that premium feel 
              and exceptional durability. The perfect piece for late-night sessions 
              and everyday wear.
            </p>
          </div>
        )}
      </div>

      {/* Sizing Details */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-primary font-mono uppercase tracking-wider rounded-none"
        >
          <span>Size Guide</span>
          {isDetailsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDetailsOpen && (
          <div className="pb-6 space-y-3">
            <p className="text-xs font-mono text-muted-foreground mb-4">
              // Measurements in inches (chest width x length)
            </p>
            <div className="flex justify-between">
              <span className="text-sm font-mono text-muted-foreground">S</span>
              <span className="text-sm font-mono text-foreground">22" x 27"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono text-muted-foreground">M</span>
              <span className="text-sm font-mono text-foreground">23" x 28"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono text-muted-foreground">L</span>
              <span className="text-sm font-mono text-foreground">24" x 29"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono text-muted-foreground">XL</span>
              <span className="text-sm font-mono text-foreground">25" x 30"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono text-muted-foreground">2XL</span>
              <span className="text-sm font-mono text-foreground">26" x 31"</span>
            </div>
          </div>
        )}
      </div>

      {/* Care Instructions */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsCareOpen(!isCareOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-primary font-mono uppercase tracking-wider rounded-none"
        >
          <span>Care</span>
          {isCareOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isCareOpen && (
          <div className="pb-6 space-y-2">
            <p className="text-sm font-mono text-muted-foreground">• Machine wash cold</p>
            <p className="text-sm font-mono text-muted-foreground">• Inside out recommended</p>
            <p className="text-sm font-mono text-muted-foreground">• Tumble dry low</p>
            <p className="text-sm font-mono text-muted-foreground">• Do not iron on print</p>
            <p className="text-sm font-mono text-muted-foreground">• Do not bleach</p>
          </div>
        )}
      </div>

      {/* Shipping */}
      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsShippingOpen(!isShippingOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-primary font-mono uppercase tracking-wider rounded-none"
        >
          <span>Shipping</span>
          {isShippingOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isShippingOpen && (
          <div className="pb-6 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-mono text-foreground">USA</p>
              <p className="text-sm font-mono text-muted-foreground">5-7 business days // Free over $100</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-mono text-foreground">International</p>
              <p className="text-sm font-mono text-muted-foreground">10-14 business days // Rates at checkout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
