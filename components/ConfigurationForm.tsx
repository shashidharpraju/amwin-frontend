"use client";

import { useState } from "react";

// Define TypeScript interfaces for your data structures
interface ComponentItem {
  id: string | number;
  type: string;
  name: string;
  price: number;
}

interface Product {
  basePrice: number;
  components: ComponentItem[];
}

interface ConfigurationFormProps {
  product: Product;
}

export default function ConfigurationForm({ product }: ConfigurationFormProps) {
  const [selectedComponents, setSelectedComponents] = useState<Record<string, ComponentItem>>({});

  const handleSelect = (type: string, component: ComponentItem) => {
    setSelectedComponents((prev) => ({ ...prev, [type]: component }));
  };

  const totalPrice =
    product.basePrice +
    Object.values(selectedComponents).reduce(
      (acc, comp) => acc + comp.price,
      0
    );

  return (
    <div className="space-y-6">
      {/* Group components by type (CPU, RAM, GPU) */}
      {["CPU", "RAM", "GPU"].map((type) => (
        <div key={type}>
          <h3 className="font-bold">{type}</h3>
          {product.components
            .filter((c) => c.type === type)
            .map((comp) => (
              <button
                key={comp.id}
                onClick={() => handleSelect(type, comp)}
                className={`p-2 border ${
                  selectedComponents[type]?.id === comp.id
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
              >
                {comp.name} (+₹{comp.price})
              </button>
            ))}
        </div>
      ))}

      <div className="text-2xl font-bold">Total: ₹{totalPrice}</div>
      <button className="bg-green-600 text-white px-6 py-2 rounded">
        Request Quote
      </button>
    </div>
  );
}