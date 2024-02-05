import type { Metadata } from "next";
import "./ui/globals.css";
import Header from "./ui/Header";
import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Olharte - Personalizador Neon",
  description: "Site personalizador de placas em Neon por Olharte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col h-screen w-full bg-company-gradient">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
