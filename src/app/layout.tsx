import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: "Chat App",
  description: "MAKB APP FOR CHATTING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="poppins-regular">
        {children}
        </body>
    </html>
  );
}
