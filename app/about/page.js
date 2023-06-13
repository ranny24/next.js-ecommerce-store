import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

/* const styles = {
  container: css`
    max-width: 800px;
    margin: 1 auto;
    padding: 20px;
    background-color: pink;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  `,
  heading: css`
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  `,
  paragraph: css`
    font-size: 16px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 10px;
  `,
  link: css`
    color: #0070f3;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
  `,
  image: css`
    max-width: 20%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
}; */

const AboutPage = () => {
  return (
    <div css={styles.container}>
      <h1 css={styles.heading}>About Page</h1>

      <p css={styles.paragraph}>
        Welcome to Ceramic Delights, a delightful haven for ceramic enthusiasts!
        At Ceramic Delights, we believe that beauty lies in the smallest
        details. We are passionate about creating cute and sweet ceramic pieces
        that bring joy and warmth to your home. Each item is meticulously
        handcrafted with love and care, making them unique treasures that will
        add a touch of charm to any space. Our talented team of artisans at
        Ceramic Delights pours their heart and soul into every creation,
        ensuring that each piece reflects our commitment to quality and
        craftsmanship. From adorable figurines and whimsical ornaments to
        functional pottery and decorative accents, our collection is a
        celebration of all things ceramic. We take pride in sourcing the finest
        materials and employing traditional techniques to produce ceramics that
        are not only visually appealing but also durable and long-lasting.
        Whether you're searching for a special gift or looking to spruce up your
        own home, Ceramic Delights' carefully curated selection offers something
        for everyone. At Ceramic Delights, we believe that shopping for ceramics
        should be a delightful experience. That's why we strive to provide
        exceptional customer service, ensuring that your needs are met and your
        expectations exceeded. We are here to assist you every step of the way,
        from helping you choose the perfect piece to answering any questions you
        may have. Thank you for visiting Ceramic Delights. We invite you to
        explore our captivating collection and discover the magic of ceramic
        art. Embrace the cuteness and sweetness that awaits, and let Ceramic
        Delights' ceramics bring a smile to your face and warmth to your heart.
      </p>

      <img src="fubsies.png" alt="background" css={styles.image} />
      <Link href="/" css={styles.link}>
        Home Page
      </Link>
    </div>
  );
};

export default AboutPage;
