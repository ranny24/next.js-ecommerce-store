import Head from 'next/head';

const ThankYou = () => {
  return (
    <div>
      <Head>
        <title>Thank You</title>
        <link rel="icon" href="/" />
      </Head>

      <main>
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
      </main>
    </div>
  );
};

export default ThankYou;
