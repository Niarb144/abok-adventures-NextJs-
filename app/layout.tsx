import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsappFloat";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Abok Adventures",
  description: "A premier tour operator in Kenya offering unforgettable safari experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ClientLayout>
          <Navbar />
          {children}
          <WhatsAppFloat />
          <ScrollToTop />
          <Footer />
      </ClientLayout>
      </body>
    </html>
  );
}
