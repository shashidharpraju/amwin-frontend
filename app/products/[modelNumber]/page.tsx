// app/products/[modelNumber]/page.tsx
import { notFound } from "next/navigation";
import ConfiguratorForm from "./ConfiguratorForm";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

interface ConfiguratorPageProps {
  params: Promise<{
    modelNumber: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function ConfiguratorPage({
  params,
}: ConfiguratorPageProps) {
  const resolvedParams = await params;

  let product: any = null;

  try {
    const res = await fetch(`${BACKEND_URL}/api/products/${resolvedParams.modelNumber}`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (data?.success && data.product) {
      product = data.product;
    }
  } catch (error) {
    console.error("Error fetching product details from backend:", error);
  }

  if (!product) {
    notFound();
  }

  // Safely parse basePrice regardless of whether it's a number, string, or Decimal
  const basePriceNum =
    typeof product.basePrice === "number"
      ? product.basePrice
      : typeof product.basePrice?.toNumber === "function"
      ? product.basePrice.toNumber()
      : parseFloat(product.basePrice || "0");

  const serializedProduct = {
    modelNumber: product.modelNumber,
    name: product.name,
    category: product.category,
    platform: product.platform,
    briefConfig: product.briefConfig,
    basePrice: basePriceNum,
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Product Hero Banner */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {product.platform} Processor
            </span>
            <span className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl">
            Model: <span className="text-white">{product.modelNumber}</span>{" "}
            <br />
            {product.briefConfig}
          </p>
        </div>
      </div>

      {/* Configurator Form Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <ConfiguratorForm product={serializedProduct} />
      </div>
    </main>
  );
}
