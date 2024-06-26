"use client";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreProvider from "./appProvider";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className="dark">
      <body className="poppins-regular bg">
        <ToastContainer />
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
