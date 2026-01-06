import { Link } from "react-router-dom";
import bishuSweatshirt from "@/assets/bishu-sweatshirt-black.png";
import bishuTeeBlack from "@/assets/bishu-tee-black.png";
import bishuTeeCream from "@/assets/bishu-tee-cream.png";
import bishuHoodie from "@/assets/bishu-hoodie-black.png";
import bishuGlitchHoodie from "@/assets/bishu-glitch-hoodie.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "BISHU GLITCH HOODIE",
    category: "Hoodie",
    price: "$85",
    image: bishuGlitchHoodie,
    isNew: true,
  },
  {
    id: 2,
    name: "BISHU OVAL LOGO HOODIE",
    category: "Hoodie",
    price: "$75",
    image: bishuHoodie,
    isNew: true,
  },
  {
    id: 3,
    name: "BISHU OVAL LOGO SWEATSHIRT",
    category: "Sweatshirt",
    price: "$65",
    image: bishuSweatshirt,
  },
  {
    id: 4,
    name: "BISHU CLASSIC TEE - BLACK",
    category: "T-Shirt",
    price: "$35",
    image: bishuTeeBlack,
  },
  {
    id: 5,
    name: "BISHU CLASSIC TEE - CREAM",
    category: "T-Shirt",
    price: "$35",
    image: bishuTeeCream,
  },
  {
    id: 6,
    name: "BISHU GLITCH HOODIE - LTD",
    category: "Hoodie",
    price: "$95",
    image: bishuGlitchHoodie,
    isSoldOut: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-display tracking-wider text-foreground">
          COLLECTION
        </h2>
        <p className="text-sm font-mono text-muted-foreground mt-2">
          // ALL ITEMS
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="group cursor-pointer">
              <div className="aspect-square mb-3 overflow-hidden bg-card relative border border-border hover:border-primary transition-colors duration-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 px-2 py-1 text-xs font-mono bg-primary text-primary-foreground uppercase tracking-wider">
                    NEW
                  </div>
                )}
                {product.isSoldOut && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-sm font-mono text-destructive uppercase tracking-wider">
                      SOLD OUT
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </p>
                <h3 className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-mono text-primary">
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
