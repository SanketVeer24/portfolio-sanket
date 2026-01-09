import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanket Veer | Engineering Impact at Scale",
  description:
    "Portfolio of Sanket Veer, software engineer and emerging technology leader focused on scalable systems, Android, cloud-native architectures, and data integrity."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-night text-slate-100">
        {children}
      </body>
    </html>
  );
}
