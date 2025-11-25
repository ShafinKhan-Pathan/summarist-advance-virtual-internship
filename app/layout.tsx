import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import AuthForm from "./auth/AuthForm";
import AuthInitializer from "./providers/AuthInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summarist",
  description: "AI powered book summaries",
  icons: {
    icon: "/TabLogo.png",
  },
  other: {
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <AuthInitializer />
          <AuthForm />
          {children}
        </Providers>
      </body>
    </html>
  );
}
