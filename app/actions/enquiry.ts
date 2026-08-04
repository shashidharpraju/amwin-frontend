"use server";

import { submitEnquiryToBackend } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function submitEnquiry(formData: FormData) {
  const fullName = formData.get("fullName")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim().toLowerCase() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  if (!fullName || !email || !phone || !message) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    const result = await submitEnquiryToBackend({ fullName, email, phone, message });

    try {
      revalidatePath("/dashboard/sales");
      revalidatePath("/admin/sales-team");
    } catch (e) {
      // Ignore static store error outside request context
    }

    return result;
  } catch (error) {
    console.error("Round-Robin Enquiry Error:", error);
    return { success: false, error: "Enquiry submission failed due to a server error." };
  }
}
