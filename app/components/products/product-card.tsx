import { StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className=" p-6 bg-amber-100 border border-neutral-400 px-4 rounded-md hover:bg-emerald-950 hover:text-white shadow-lg">
        <div className="flex  max-w-4xl w-full mx-auto gap-3 items-center">
          <h1 className="text-xs font-semibold">{product.name}</h1>
          <div>
            {product.isFeatured ? (
              <button className="flex  gap-2 bg-pink-700 text-white px-4 py-1 text-sm rounded-full items-center">
                {
                  <>
                    <StarIcon size={10} /> Featured
                  </>
                }
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="">
          <p className="text-xs mt-3 max-w-md  ">{product.description}</p>
        </div>
        <div className="flex gap-2 mt-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="gap-2 bg-cyan-400 text-xs px-2 py-1 rounded-md text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

