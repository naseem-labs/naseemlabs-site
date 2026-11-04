import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaseemLabs — Hair Transplant Clinic Inquiries on WhatsApp",
  description:
    "Premium conversational inquiry system for hair transplant clinics. Patient inquiries handled automatically on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="font-sans min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
