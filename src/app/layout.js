import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
// import Navbar from "@/components/Shared/Navbar";
import { Poppins, Roboto } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const getTexta = localFont({
  src: [
    { path: './fonts/texta/TextaRegular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/texta/TextaBold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/texta/TextaBoldIt.ttf', weight: '700', style: 'italic' },
    { path: './fonts/texta/TextaLight.ttf', weight: '300', style: 'normal' },
    { path: './fonts/texta/TextaLightIt.ttf', weight: '300', style: 'italic' },
    { path: './fonts/texta/TextaMedium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/texta/TextaMediumIt.ttf', weight: '500', style: 'italic' },
    { path: './fonts/texta/TextaThin.ttf', weight: '100', style: 'normal' },
    { path: './fonts/texta/TextaBlack.ttf', weight: '900', style: 'normal' },
    { path: './fonts/texta/TextaBlackIt.ttf', weight: '900', style: 'italic' },
    { path: './fonts/texta/TextaBook.ttf', weight: '400', style: 'normal' },
    { path: './fonts/texta/TextaBookIt.ttf', weight: '400', style: 'italic' },
    { path: './fonts/texta/TextaHeavy.ttf', weight: '800', style: 'normal' },
    { path: './fonts/texta/TextaHeavyIt.ttf', weight: '800', style: 'italic' },
  ],
  variable: '--font-texta', // Optional CSS variable name
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins', // Add CSS variable
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto', // Add CSS variable
});



export const metadata = {
  title: "Home - Insomnia Lab",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={` ${getTexta.className} antialiased bg-[#121212] text-[#E0E0E0]`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
