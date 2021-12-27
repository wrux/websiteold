import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* @TODO: Revert script removal */}
          {/* <script
            defer
            data-domain="wrux.com"
            src="https://plausible.io/js/plausible.js"
          ></script> */}
        </Head>
        <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
