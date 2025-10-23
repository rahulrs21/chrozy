import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ProductSwiper from "./ProductSwiper";

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  sku?: string;
  images?: { src: string }[];
};

async function fetchProduct(id: string): Promise<Product> {
  const username = process.env.WC_CONSUMER_KEY!;
  const password = process.env.WC_CONSUMER_SECRET!;
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const res = await fetch(`https://fazahomes.rahuldxb.com/wp-json/wc/v3/products/${id}`, {
    headers: { Authorization: `Basic ${auth}` },
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Scrollable Images */}
        <div className="relative space-y-4 md:py-8">

          <div>
            {/* Desktop device */}
            <div className="hidden md:block">
              {product.images?.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={product.name}
              width={600}
              height={600}
              className="w-full rounded-none"
              priority={idx === 0}
            />
          ))}
            </div>

            {/* Mobile device */}
            <div className="block md:hidden">
              <ProductSwiper images={product.images ?? []} />
            </div>
          </div>
          
        </div>

        {/* Right side - Sticky Product details */}
        <div className="md:sticky md:top-8 space-y-6 h-fit md:py-8">
          {product.sku && (
            <p className="text-sm text-gray-500">{product.sku}</p>
          )}

          <div>
            <p className="text-sm mb-2">New</p>
            <h1 className="text-2xl font-normal mb-4">{product.name}</h1>
            <p className="text-lg">
              {product.price} AED
              <span className="text-sm text-gray-500 ml-2">(VAT included)</span>
            </p>
          </div>

          {/* Colors section if needed */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-sm mb-4">Colors</h3>
            <div className="flex gap-4">
              {/* Add color options here */}
            </div>
          </div>

          {/* Add to cart button */}
          <button className="w-full bg-black text-white py-4 px-6 text-center hover:bg-gray-900 transition-colors">
            Place in cart
          </button>

          <button className="w-full border border-black py-4 px-6 text-center hover:bg-gray-50 transition-colors">
            Contact an Advisor
          </button>

          <p className="text-sm text-gray-600">Shipping by tomorrow</p>

          {/* Product description */}
          <div className="pt-6 border-t border-gray-200">
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>

          {/* Expandable sections */}
          <div className="space-y-4 pt-6">
            <button className="flex items-center justify-between w-full py-4 border-t border-gray-200">
              <span>Sustainability</span>
              <span>+</span>
            </button>
            <button className="flex items-center justify-between w-full py-4 border-t border-gray-200">
              <span>Product Care</span>
              <span>+</span>
            </button>
            <button className="flex items-center justify-between w-full py-4 border-t border-gray-200">
              <span>In-store service</span>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
