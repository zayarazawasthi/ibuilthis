import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import { Emblema_One } from "next/font/google";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/products-select";

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
    <section className="bg-teal-200">
      <div >
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid grid-cols-3 max-w-4xl mx-auto w-full py-8 gap-4">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
