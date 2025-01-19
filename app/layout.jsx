import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100","200","300","400","500","600","700","800"],
});

export const metadata = {
  title: "Next App Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
          <Header />
          <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
