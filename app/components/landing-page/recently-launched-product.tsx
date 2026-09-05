import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import { Emblema_One } from "next/font/google";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = [
    
    {
      id: 1,
      name: "ParityKit",
      description: "A toolkit for creating parity products",
      tags: ["SaaS", "Pricing", "Global"],
      votes: 615,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Modern Full Stack Next.js Course",
      description:
        "Learn to build production-ready fullstack apps with Next.js",
      tags: ["SaaS", "Pricing", "Global"],
      votes: 124,
      isFeatured: false,
    },

    {
      id: 3,
      name: "Modern Full Stack Next.js Course",
      description:
        "Learn to build production-ready fullstack apps with Next.js",
      tags: ["SaaS", "Pricing", "Global"],
      votes: 124,
      isFeatured: false,
    },
  ];

  return (
    <section>
      <SectionHeader
        title="Recently Launched"
        icon={RocketIcon}
        description="Discover the latest products from our community"
      />
     
      {recentlyLaunchedProducts.length > 0 ? (<div className="flex max-w-4xl mx-auto w-full py-8 gap-4">
        {recentlyLaunchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> ):(<EmptyState />)}
    </section>
  );
}
