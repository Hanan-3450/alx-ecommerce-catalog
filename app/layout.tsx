import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "../store/providers"; // <-- updated import

export const metadata = {
  title: "E-Commerce Catalog",
  description:
    "Dynamic product catalog built with Next.js, Redux, and Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
            🛒 E-Commerce Catalog
          </header>
          <main className="p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
