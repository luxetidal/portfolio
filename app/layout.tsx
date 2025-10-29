import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import { UIProvider } from "./providers/UIProvider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Next.js Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UIProvider>
          {<Header />}
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
