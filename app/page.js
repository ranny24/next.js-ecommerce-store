import './globals.css';
import React from 'react';
import Header from './Components/Header';
import { CookieBanner } from './CookieBanner';
import styles from './CookieBanner.module.scss';

const HomePage = () => {
  return (
    <div>
      <Header />

      <h1>Welcome to Ceramic Delights!</h1>
      <p>
        {' '}
        Welcome to our charming world of ceramic wonders, where cuteness and
        sweetness collide!
      </p>

      <img src="cutie.jpg" alt="background" width="100%" height="100%" />

      <CookieBanner />
    </div>
  );
};

export default HomePage;
