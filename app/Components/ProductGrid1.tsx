import productBag1 from "/app/images/product-bag-1.jpg";
import productBag2 from "/app/images/product-bag-2.jpg";
import productBag3 from "/app/images/product-bag-3.jpg";
import productWallet from "/app/images/product-wallet.jpg";
import productShoes from "/app/images/product-shoes.jpg";
import productAccessories from "/app/images/product-accessories.jpg";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Heritage Tote",
    category: "Handbags",
    price: "$3,200",
    image: productBag1,
  },
  {
    id: 2,
    name: "Classic Satchel",
    category: "Handbags",
    price: "$2,800",
    image: productBag2,
  },
  {
    id: 3,
    name: "Signature Wallet",
    category: "Small Leather Goods",
    price: "$650",
    image: productWallet,
  },
  {
    id: 4,
    name: "Oxford Shoes",
    category: "Footwear",
    price: "$1,450",
    image: productShoes,
  },
  {
    id: 5,
    name: "Evening Clutch",
    category: "Handbags",
    price: "$1,900",
    image: productBag3,
  },
  {
    id: 6,
    name: "Leather Belt",
    category: "Accessories",
    price: "$480",
    image: productAccessories,
  },
];

export const ProductGrid1 = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Featured Collection
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of timeless pieces, each crafted with 
            exceptional attention to detail and the finest materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-4 bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl">{product.name}</h3>
                <p className="font-sans font-medium">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
