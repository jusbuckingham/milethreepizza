import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // This will make text visible immediately with a fallback if the font hasn't loaded yet
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mile3Pizza - Fresh, Delicious Pizza",
  description: "Order the best NY-style pizza at Mile3Pizza. Check out our menu and contact us for a delicious pizza experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Mile3Pizza-Favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        {/* Navbar at the top */}
        <Navbar />

        {/* Accessibility widget */}
        <Accessibility />

        {/* Main content of the page */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
