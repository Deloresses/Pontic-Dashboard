import "@/app/styles/globals.scss";
import type { Metadata } from "next";
import "./layout.module.scss";

export const metadata: Metadata = {
  title: "Pontic",
  description: "Financial clarity for dentists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">
        {children}
      </body>
    </html>
  );
}
