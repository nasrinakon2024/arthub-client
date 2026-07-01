import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtHub",
  description: "Discover & Buy Original Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* এখানে কোনো Navbar বা Footer দেবেন না */}
        {children}
      </body>
    </html>
  );
}