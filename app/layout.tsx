import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Initiative Youth Development Programme (IYDP",
  description: "Initiative Youth Development Programme (IYDP) is an organisation that focuses on fixing the minds of young teenagers towards their future and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="5lMJ1eWk4hG4e5ZkDePI3tVbFhSmRj52RspbPmOH2uo" />
      </head>
      
      <body className={inter.className}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
