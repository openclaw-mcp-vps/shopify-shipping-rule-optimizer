import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipOptimizer – Auto-optimize Shopify Shipping Rules",
  description: "Analyze cart abandonment data and automatically optimize shipping rules to reduce checkout friction and boost revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="086f39c5-53d9-4c11-a4d9-c2cea897dada"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
