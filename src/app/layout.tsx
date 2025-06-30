import type { Metadata } from "next";
import "./globals.css";
import GsapProvider from "@/components/common/GsapProvider";

export const metadata: Metadata = {
  title: "Aura - Comfortable Living",
  description: "Pioneering the Future of Comfortable Living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}
