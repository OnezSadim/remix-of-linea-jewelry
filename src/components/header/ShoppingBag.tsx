import { X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

interface ShoppingBagProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, newQuantity: number) => void;
  onViewFavorites?: () => void;
}

const ShoppingBag = ({ isOpen, onClose, cartItems, updateQuantity }: ShoppingBagProps) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 h-screen">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 h-screen"
        onClick={onClose}
      />
      
      {/* Off-canvas panel */}
      <div className="absolute right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-mono uppercase tracking-wider text-foreground">
            Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground text-sm font-mono text-center">
                Your cart is empty.<br />
                Continue shopping to add items.
              </p>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="flex-1 overflow-y-auto space-y-6 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-border pb-6">
                    <div className="w-20 h-20 bg-card border border-border flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {item.category}
                      </p>
                      <h3 className="text-sm font-mono text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm font-mono text-primary mb-3">{item.price}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-border">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted/50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-2 text-sm font-mono min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted/50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Subtotal and checkout */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Subtotal</span>
                  <span className="text-lg font-mono text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                
                <p className="text-xs font-mono text-muted-foreground">
                  // Shipping calculated at checkout
                </p>
                
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full py-4 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-wider text-center hover:bg-primary-hover transition-colors"
                >
                  Checkout
                </Link>
                
                <button
                  onClick={onClose}
                  className="block w-full py-4 border border-border text-foreground text-sm font-mono uppercase tracking-wider text-center hover:border-primary hover:text-primary transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
