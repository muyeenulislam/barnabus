import { Outfit } from "next/font/google";
import "./globals.css";

import MainLayout from "@/components/layout/main-layout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barnabus.ai",
  description: "Barnabus",
  icons: {
    icon: [
      {
        url: "/icons/barnabus-logo.svg",
        href: "/icons/barnabus-logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
