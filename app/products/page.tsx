import ProductsClient from "@/src/components/ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Products",
  description:
    "Explore our solar products including panels, inverters, batteries, and complete solar kits in Nigeria.",
  keywords: [
    "solar panels Nigeria",
    "inverters Nigeria",
    "solar batteries",
    "solar kits Nigeria",
  ],
  openGraph: {
    title: "Solar Products | AZMIL Power",
    description:
      "High-quality solar panels, inverters, and batteries for homes and businesses.",
    url: "https://azmilsolar.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
