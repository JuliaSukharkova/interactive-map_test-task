import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interactive map",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
