import { Inter } from "next/font/google";

import "./globals.css";
import "../assets/icons/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spedit",
  description: "Elevate Wealth, With Copy Trade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
