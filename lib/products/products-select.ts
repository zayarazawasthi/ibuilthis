
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { connection } from "next/server";


export async function getFeaturedProducts() {
  "use cache";
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
  return productsData;
}
export async function getAllProducts() {
"use cache"
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  
  "use cache"
  const productData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo,
  );
}
