import Head from 'next/head';
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "HotelNest",
  description: "Experience the convenience of HotelNest – your go-to destination for easy hotel bookings and enjoyable stays. Discover a user-friendly platform that simplifies your travel plans. Benefit from instant updates, secure payment options, and a variety of accommodation choices. Make your booking stress-free with HotelNest, where modern technology meets hassle-free hospitality. We're here to make your stay as smooth as possible – book with us for a seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap' rel='stylesheet' />
      </Head>
      <body className='font-montserrat'>
        <main className='font-normal'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}