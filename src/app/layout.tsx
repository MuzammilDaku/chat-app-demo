"use client";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreProvider from "./appProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* <head><title>Chat App</title></head> */}
      <body className="poppins-regular">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
