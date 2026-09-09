import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function getFeaturedProducts() {
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"));
  return productsData;
}


export async function getRecentlyLaunchedProducts() {
    const productData = await getFeaturedProducts();
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate()-7);

    return productData.filter((product)=> 
        product.createdAt && 
        new Date(product.createdAt.toISOString()) >= oneWeekAgo
    )
}