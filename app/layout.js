// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from './CookieBanner'; // Add this import statement
import { getCookie } from './util/cookies';
import { parseJson } from './util/json';

// const {cart : cartCookies} = parseJson(getCookie('cart'));
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Mini Store - Home',
  description: 'Welcome to my mini store',
}

export default function RootLayout({ children }) {
  const cart = ('cart');
  // const carts = !cartCookies ? [] : parseJson(cartCookies);


  // const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <CookieBanner /> {/* Render the CookieBanner component */}
      <header>

      </header>
    </html>
  )
}
