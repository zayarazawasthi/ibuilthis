// "use cache"

import Link from "next/link";
import SectionHeader from "../common/section-header";
import { StarIcon } from "lucide-react";
import ProductCard from "../products/product-card";
import { getFeaturedProducts } from "@/lib/products/products-select";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: "A toolkit for creating parity products",
//     tags: ["SaaS", "Pricing", "Global"],
//     votes: 615,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "Modern Full Stack Next.js Course",
//     description: "Learn to build production-ready fullstack apps with Next.js",
//     tags: ["SaaS", "Pricing", "Global"],
//     votes: 124,
//     isFeatured: false,
//   },
  
//   {
//     id: 3,
//     name: "Modern Full Stack Next.js Course",
//     description: "Learn to build production-ready fullstack apps with Next.js",
//     tags: ["SaaS", "Pricing", "Global"],
//     votes: 124,
//     isFeatured: false,
//   },
// ];

export default async function FeaturedProduct() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="py-10 pointer-cursor bg-lime-200">
      <div className="flex max-w-4xl w-full mx-auto justify-between items-center">
        <SectionHeader
          title="Featured Today"
          icon={StarIcon}
          description="Top picks from our community this week"
        />

        <button className="px-4 py-2 bg-neutral-800 text-white rounded-md whitespace-nowrap shrink-0">
          <Link href="/explore">View All</Link>
        </button>
      </div>
      <div className="grid max-w-4xl mx-auto grid-cols-3 gap-4 py-8  ">
        {featuredProducts.map((product) => (
          <ProductCard  key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
