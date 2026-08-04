"use server";
import { addProductToBackend } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  await addProductToBackend({
    modelNumber: data.modelNumber as string,
    name: data.name as string,
    category: data.category as string,
    platform: data.platform as string,
    briefConfig: data.briefConfig as string,
    basePrice: parseFloat(data.basePrice as string || "0"),
  });

  revalidatePath("/products");
}
