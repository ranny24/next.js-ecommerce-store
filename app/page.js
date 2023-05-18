import Link from 'next/link';
import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Home page!</h1>
      <p> This is the home page content.</p>
    </div>
  );
};

export default HomePage;
