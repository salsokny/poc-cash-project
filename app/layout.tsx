"use client"; // Mark this component as a client component

import "./globals.css"; // Import global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import createEmotionCache from "../lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const clientSideEmotionCache = createEmotionCache();
  const pathname = usePathname(); // Get the current path

  // Define pages where Header and Footer are hidden
  const hideLayout =
    pathname === "/sign-in" ||
    pathname === "/create-account" ||
    pathname === "/enter-new-password" ||
    pathname === "/verify-code" ||
    pathname === "/reset-password" ||
    pathname === "/";

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <html lang="en">
        <body className="flex flex-col min-h-screen bg-gray-50">
          {/* {!hideLayout && <Header />} */}
          {!hideLayout && (
            <header className="sticky top-0 z-50 bg-white !shadow-none">
              <Header />
            </header>
          )}
          <main
            className={`flex-grow !bg-[#f4f7fa] ${
              hideLayout ? "" : "px-4 py-6"
            } bg-white`}
          >
            <div
              className={`${hideLayout ? "" : "container mx-auto max-w-6xl"}`}
            >
              {children}
            </div>
          </main>
          {!hideLayout && (
            <footer className="!bg-[#FFFFFF] text-white">
              <div className="container mx-auto max-w-6xl  mb-[30px]">
                <Footer />
              </div>
            </footer>
          )}
        </body>
      </html>
    </CacheProvider>
  );
}
