import type { Metadata } from "next";
import { Inter, JetBrains_Mono, REM, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const rem = REM({ subsets: ["latin"], variable: "--font-rem" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Felipe Souza | Design & Code",
  description: "Portfolio de Felipe Souza - UI/UX Designer e Front-End Developer",
};

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${rem.variable} ${raleway.variable} font-sans antialiased bg-[#020202] text-gray-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
