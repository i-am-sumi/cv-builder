"use client";

import { AppHeader } from "@/modules/components/AppHeader";
import FooterSection from "@/modules/components/Footer/FooterSection";
import QueryProvider from "@/modules/components/Provider/QueryProvider";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";

import LoadingCard from "@/modules/components/LoadingCard";
import "./globals.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <LoadingCard />
        ) : (
          <QueryProvider>
            <AppHeader />
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
            <FooterSection />
          </QueryProvider>
        )}
      </body>
    </html>
  );
}
