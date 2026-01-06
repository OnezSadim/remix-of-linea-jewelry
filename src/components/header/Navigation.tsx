import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "./ShoppingBag";
import bishuSweatshirt from "@/assets/bishu-sweatshirt-black.png";
import bishuTeeBlack from "@/assets/bishu-tee-black.png";
import bishuHoodie from "@/assets/bishu-hoodie-black.png";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  
  // Shopping bag state with mock items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "BISHU OVAL LOGO SWEATSHIRT",
      price: "$65",
      image: bishuSweatshirt,
      quantity: 1,
      category: "Sweatshirt"
    },
    {
      id: 2,
      name: "BISHU CLASSIC TEE",
      price: "$35", 
      image: bishuTeeBlack,
      quantity: 1,
      category: "T-Shirt"
    },
    {
      id: 3,
      name: "BISHU LOGO HOODIE",
      price: "$75",
      image: bishuHoodie, 
      quantity: 1,
      category: "Hoodie"
    }
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <nav className="relative bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile hamburger button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 top-2.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'
            }`}></span>
          </div>
        </button>

        {/* Left navigation - Shop link */}
        <div className="hidden lg:flex">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-mono uppercase tracking-wider"
          >
            Shop
          </Link>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="block">
            <span className="text-2xl font-display tracking-wider text-foreground hover:text-primary transition-colors">
              BISHU
            </span>
          </Link>
        </div>

        {/* Right - Cart */}
        <div className="flex items-center">
          <button 
            className="p-2 text-foreground hover:text-primary transition-colors duration-200 relative flex items-center gap-2"
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <span className="text-sm font-mono uppercase tracking-wider hidden lg:block">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-mono w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors duration-200 text-lg font-mono uppercase tracking-wider block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Shopping Bag Component */}
      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        onViewFavorites={() => {}}
      />
    </nav>
  );
};

export default Navigation;
