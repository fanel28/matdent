import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/seo/JsonLd";
import { buildMetadata } from "./lib/seo";
import { localBusinessSchema, organizationSchema } from "./lib/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "MatDent Clinique | Dentist in Craiova",
    description:
      "MatDent Clinique este o clinica dentara in Craiova cu servicii complete de stomatologie, de la preventie la implantologie si estetica dentara.",
    path: "/",
    keywords: [
      "dentist in Craiova",
      "clinica dentara in Craiova",
      "stomatologie Craiova",
      "implant dentar Craiova",
      "albire dentara Craiova",
    ],
  }),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}>
        <JsonLd data={[organizationSchema, localBusinessSchema]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
