import { NextRequest, NextResponse } from "next/server";

type Product = {
  id: number;
  name: string;
  price: string;
  images?: { src: string }[];
  categories?: { id: number; name: string }[];
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("per_page") || "20";
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";

  const username = process.env.WC_CONSUMER_KEY!;
  const password = process.env.WC_CONSUMER_SECRET!;
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  let url = `https://fazahomes.rahuldxb.com/wp-json/wc/v3/products?per_page=${perPage}&page=${page}`;
  if (category) url += `&category=${category}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;

  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}` },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }

  const products: Product[] = await res.json();
  return NextResponse.json(products);
}
