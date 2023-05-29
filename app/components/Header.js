import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/product">Product</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">
          <span>Cart </span>
          <img src="/cart.svg" alt="Cart" width="20" height="20" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
