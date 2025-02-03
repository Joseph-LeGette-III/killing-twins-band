import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const seo = SEO({
    title: "Killing Twins",
    description:
      "Experience the raw energy of Killing Twins, a death thrash metal band from Metro Vancouver.",
    imageRef: "/logo.svg",
    tags: "killingtwins, killing twins, killingtwinsband, killing twins band, band, metal, music",
  });

  return seo;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-dvh bg-neutral-950 text-white">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
