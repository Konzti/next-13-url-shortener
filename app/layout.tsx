import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="business">
      <head />
      <body className={`min-h-screen flex flex-col ${poppins.variable} font-sans`}>
        <Header />
        <div className="flex-1 px-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
