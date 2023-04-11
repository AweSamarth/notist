import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${inter.variable} ${poppins.variable}`} >
  <Component {...pageProps} />
  </main>
  )
}
