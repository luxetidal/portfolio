"use client";

import { useContext } from "react";
import Header from "./Header";
import { UIContext } from "../providers/UIProvider";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { showLayout } = useContext(UIContext);

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Header />}
      <main className="grow">{children}</main>
      <Footer />
      <SpeedInsights />
    </div>
  );
}
