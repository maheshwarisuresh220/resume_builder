import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar";
import "./styles/globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Resume Builder",
  description: "A modern and interactive resume builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className} ${playfairDisplay.className}`}>
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
