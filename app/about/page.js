import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>

      <p>
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

      <br/>
      <img src= "fubsies.png" alt="background" width="30%" height="20%" />
      <Link href="/"> home page</Link>

    </div>
  );
};

export default AboutPage;
