import { Outfit } from "next/font/google";

import { getBaseUrl } from "@/utils/get-base-url";
import MainLayout from "@/components/layout/main-layout";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(await getBaseUrl()),
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
