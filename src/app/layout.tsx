import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/header";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takoiaki",
  description: "ecommerce project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jetbrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
