import "./globals.css";
import type { Metadata } from "next";
import { UIProvider } from "./providers/UIProvider";
import ClientLayout from "./components/ClientLayout";

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
          <ClientLayout>{children}</ClientLayout>
        </UIProvider>
      </body>
    </html>
  );
}
