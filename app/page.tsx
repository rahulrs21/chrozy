// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "./Components/Hero";
import { Hero1 } from "./Components/Hero1";
import { Navigation } from "./Components/Navigation";
import { ProductGrid1 } from "./Components/ProductGrid1";
import { Categories } from "./Components/Categories";
import { Footer } from "./Components/Footer";

type Product = {
  id: number;
  name: string;
  price: string;
  images?: { src: string }[];
};

async function fetchProducts(page: number = 1, perPage: number = 20): Promise<Product[]> {
  const username = process.env.WC_CONSUMER_KEY!;
  const password = process.env.WC_CONSUMER_SECRET!;
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const res = await fetch(
    `https://fazahomes.rahuldxb.com/wp-json/wc/v3/products?per_page=${perPage}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      next: { revalidate: 0 }, // Always fetch fresh data
    }
  );

  if (!res.ok) {
    console.error("WooCommerce API Error:", res.status, res.statusText);
    return [];
  }

  return res.json();
}

export default async function Home() {
  const products = await fetchProducts(); // Fetch first 20 products server-side

  return (
    <div>

      <div className="min-h-screen"> 
        <main>
          <Hero1 />
          <ProductGrid1 />
          <Categories />
        </main>
        <Footer />
      </div>
      <main className="p-10">
        <Hero />

        <h1 className="text-3xl font-bold mb-6">Our Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <Image
                src={product.images?.[0]?.src || "/placeholder.png"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-medium mt-2">{product.name}</h2>
              <p className="text-gray-500">{product.price} AED</p>
            </Link>
          ))}
        </div>

        {/* You can later add a Load More button here */}
      </main>
    </div>
  );
}
