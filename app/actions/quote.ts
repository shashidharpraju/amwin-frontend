"use server";

import { submitQuoteToBackend } from "@/lib/api";

export async function submitQuoteRequest(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const modelNumber = formData.get("modelNumber") as string;
  const platform = formData.get("platform") as string;
  const category = formData.get("category") as string;

  const cpuCores = formData.get("cpuCores") as string;
  const ram = formData.get("ram") as string;
  const gpu = formData.get("gpu") as string;
  const ssd = formData.get("ssd") as string;
  const hdd = formData.get("hdd") as string;
  const additionalNotes = formData.get("additionalNotes") as string;

  try {
    return await submitQuoteToBackend({
      fullName,
      email,
      phone,
      modelNumber,
      platform,
      category,
      cpuCores,
      ram,
      gpu,
      ssd,
      hdd,
      additionalNotes,
    });
  } catch (error) {
    console.error("Quote Submission Error:", error);
    return { success: false, error: "Failed to submit quote request." };
  }
}
