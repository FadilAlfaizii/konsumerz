import './globals.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import '@/public/assets/css/style.css'

import { Noto_Sans } from "next/font/google";

import { ThemeProvider } from '@/utils/themeContext';


const notoSans = Noto_Sans({
  variable: "--font-noto-san",
  subsets: ["latin"],
});

export const metadata = {
  title: "Konsumerz",
  description: "Konsultan UMKM dan Eksplorasi Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}