// app/products/page.tsx
import { getProductsFromBackend } from "@/lib/api";
import CatalogClient from "./CatalogClient";

export const dynamic = "force-dynamic";

export default async function ProductCatalog() {
  let serializedProducts: any[] = [];

  try {
    const res = await getProductsFromBackend();
    if (res?.success && Array.isArray(res.products)) {
      serializedProducts = res.products.map((p: any) => ({
        id: p.id,
        modelNumber: p.modelNumber,
        name: p.name,
        category: p.category,
        platform: p.platform,
        briefConfig: p.briefConfig,
        basePrice: typeof p.basePrice === "number" ? p.basePrice : parseFloat(p.basePrice || 0),
      }));
    }
  } catch (error) {
    console.error("Error fetching products from backend:", error);
  }

  return (
    <>
      <CatalogClient products={serializedProducts} />
    </>
  );
}
