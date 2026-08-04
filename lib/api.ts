// frontend/lib/api.ts
// Public API client for communicating with the local laptop Express backend via Cloudflare Tunnel or localhost

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export async function submitEnquiryToBackend(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}) {
  const response = await fetch(`${BACKEND_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function submitQuoteToBackend(data: {
  fullName: string;
  email: string;
  phone: string;
  modelNumber?: string;
  platform?: string;
  category?: string;
  cpuCores?: string;
  ram?: string;
  gpu?: string;
  ssd?: string;
  hdd?: string;
  additionalNotes?: string;
}) {
  const response = await fetch(`${BACKEND_URL}/api/quotes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getProductsFromBackend() {
  const response = await fetch(`${BACKEND_URL}/api/products`, {
    cache: "no-store",
  });
  return response.json();
}
