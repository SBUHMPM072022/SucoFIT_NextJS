import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layoutbar from './components/Layoutbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SucoFIT",
  description: "Sports and Health Monitoring Application for Employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Layoutbar>
          {children}
        </Layoutbar>

      </body>
    </html>
  );
}
